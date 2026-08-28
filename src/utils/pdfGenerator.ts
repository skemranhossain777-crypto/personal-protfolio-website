import { jsPDF } from 'jspdf';
import { UserProfile } from '../types';

export function generateResumePDF(profile: UserProfile): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const primaryColor = [15, 23, 42]; // Slate 900
  const secondaryColor = [71, 85, 105]; // Slate 600
  const accentColor = [37, 99, 235]; // Royal Blue 600
  const lineColor = [226, 232, 240]; // Slate 200

  function checkPageBreak(neededHeight: number) {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      renderFooter();
    }
  }

  function renderFooter() {
    const totalPages = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(
        `${profile.name} — Resume | Generated from Portfolio`,
        margin,
        pageHeight - 10
      );
      doc.text(
        `Page ${i} of ${totalPages}`,
        pageWidth - margin,
        pageHeight - 10,
        { align: 'right' }
      );
    }
  }

  function drawSectionHeading(title: string) {
    checkPageBreak(16);
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(title.toUpperCase(), margin, y);

    // Horizontal line
    y += 1.8;
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 25, y);
    doc.setDrawColor(lineColor[0], lineColor[1], lineColor[2]);
    doc.setLineWidth(0.2);
    doc.line(margin + 25, y, pageWidth - margin, y);
    y += 4.5;
  }

  // 1. Header (Name, Title, Contact Info)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(profile.name, margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text(profile.title, margin, y);
  y += 5.5;

  // Contact line
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const contactParts: string[] = [];
  if (profile.location) contactParts.push(profile.location.split('(')[0].trim());
  if (profile.email) contactParts.push(profile.email);
  if (profile.phone) contactParts.push(profile.phone);
  
  const githubSocial = profile.socials.find(s => s.platform === 'github');
  if (githubSocial) contactParts.push(`github.com/${githubSocial.username || 'profile'}`);
  
  const linkedinSocial = profile.socials.find(s => s.platform === 'linkedin');
  if (linkedinSocial) contactParts.push(`linkedin.com/${linkedinSocial.username || 'in/profile'}`);

  const contactText = contactParts.join('  •  ');
  doc.text(contactText, margin, y);
  y += 3.5;

  // Divider
  doc.setDrawColor(lineColor[0], lineColor[1], lineColor[2]);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 2;

  // 2. Professional Summary
  drawSectionHeading('Executive Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  const splitSummary = doc.splitTextToSize(profile.summary || profile.headline, contentWidth);
  checkPageBreak(splitSummary.length * 4.5);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4.5 + 2;

  // 3. Technical Skills Matrix
  drawSectionHeading('Technical Core Competencies');
  const skillCategories = ['Frontend', 'Backend & APIs', 'AI & LLM Systems', 'Cloud & DevOps', 'Databases & Infra', 'Architecture & Tools'];
  
  doc.setFontSize(9);
  skillCategories.forEach(category => {
    const catSkills = profile.skills
      .filter(s => s.category === category)
      .map(s => s.name)
      .join(', ');
    
    if (catSkills) {
      checkPageBreak(6);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      const catLabel = `${category}: `;
      const catLabelWidth = doc.getTextWidth(catLabel);
      doc.text(catLabel, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      const skillText = doc.splitTextToSize(catSkills, contentWidth - catLabelWidth);
      doc.text(skillText, margin + catLabelWidth, y);
      y += (skillText.length * 4.5) + 1.2;
    }
  });

  // 4. Professional Experience
  drawSectionHeading('Professional Experience');
  profile.experiences.forEach((exp) => {
    checkPageBreak(25);
    // Role & Company
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(exp.role, margin, y);

    // Period on right
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(exp.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;

    // Company & Location
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(`${exp.company}  |  ${exp.location}  (${exp.type})`, margin, y);
    y += 4.5;

    // Highlights bullets
    exp.highlights.forEach(highlight => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      const bulletText = doc.splitTextToSize(highlight, contentWidth - 6);
      checkPageBreak(bulletText.length * 4.2 + 2);
      
      // Bullet dot
      doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
      doc.circle(margin + 2, y - 1, 0.7, 'F');
      doc.text(bulletText, margin + 6, y);
      y += bulletText.length * 4.2 + 1;
    });

    // Tech stack pill text
    if (exp.technologies && exp.technologies.length > 0) {
      checkPageBreak(5);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.text(`Key Technologies: ${exp.technologies.join(', ')}`, margin + 6, y);
      y += 5;
    }
    y += 2;
  });

  // 5. Featured Projects
  if (profile.projects && profile.projects.length > 0) {
    drawSectionHeading('Key Featured Engineering Projects');
    const featuredProjects = profile.projects.slice(0, 3);
    featuredProjects.forEach((proj) => {
      checkPageBreak(18);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(proj.title, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
      doc.text(proj.category, pageWidth - margin, y, { align: 'right' });
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      const projDesc = doc.splitTextToSize(`${proj.tagline} Built with ${proj.technologies.slice(0, 5).join(', ')}.`, contentWidth);
      doc.text(projDesc, margin, y);
      y += projDesc.length * 4.2 + 2.5;
    });
  }

  // 6. Education
  if (profile.education && profile.education.length > 0) {
    drawSectionHeading('Education & Academic Honors');
    profile.education.forEach(edu => {
      checkPageBreak(18);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(edu.institution, margin, y);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
      doc.text(edu.period, pageWidth - margin, y, { align: 'right' });
      y += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.text(`${edu.degree} in ${edu.field}  •  ${edu.location} ${edu.grade ? `(${edu.grade})` : ''}`, margin, y);
      y += 4.5;

      edu.achievements.forEach(ach => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        const achText = doc.splitTextToSize(ach, contentWidth - 6);
        checkPageBreak(achText.length * 4 + 2);
        doc.circle(margin + 2, y - 1, 0.7, 'F');
        doc.text(achText, margin + 6, y);
        y += achText.length * 4 + 1;
      });
      y += 2;
    });
  }

  // 7. Certifications
  if (profile.certifications && profile.certifications.length > 0) {
    drawSectionHeading('Certifications & Credentials');
    profile.certifications.forEach(cert => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(`•  ${cert.name}`, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.text(` — ${cert.issuer} (${cert.date})`, margin + doc.getTextWidth(`•  ${cert.name}`), y);
      y += 4.5;
    });
  }

  // Final footer render across all pages
  renderFooter();

  // Trigger download
  const cleanName = profile.name.replace(/[^a-zA-Z0-9]/g, '_');
  doc.save(`${cleanName}_Resume.pdf`);
}
