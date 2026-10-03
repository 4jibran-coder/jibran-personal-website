import type {Metadata} from 'next';
export const metadata:Metadata={title:'Skills'};
const groups=[
 {title:'Finance & Investing',tone:'lavender',skills:['Financial Modeling','DCF Valuation','Comparable Company Analysis','Financial Statement Analysis','Investment Research','Equity / Industry Research','Due Diligence','Market Analysis','Institutional Investing','Hedge Fund Analysis']},
 {title:'Tools & Technical',tone:'sage',skills:['Microsoft Excel','Microsoft PowerPoint','Microsoft Office','Capital IQ','PitchBook','Bloomberg','Quantitative Analysis','Data Analysis','AI-Assisted Research and Analysis']},
 {title:'Professional',tone:'peach',skills:['Leadership','Communication','Presentation','Research','Teamwork','Project Management']},
];
export default function Skills(){return <main id="main"><header className="page-heading"><div><h1>Skills.</h1></div><p>What I bring to the work.</p></header><section className="skills-grid" aria-label="Skills by category">{groups.map(group=><article className={`skill-group ${group.tone}`} key={group.title}><h2>{group.title}</h2><ul className="skill-tags">{group.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></article>)}</section><section className="certifications" aria-labelledby="certifications-title"><h2 id="certifications-title">Certifications & training</h2><ul><li>Bloomberg Market Concepts</li><li>Wall Street Prep Excel</li><li>J.P. Morgan Investment Banking Job Simulation</li></ul></section></main>}
