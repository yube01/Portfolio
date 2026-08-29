import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { SiNpm, SiProducthunt } from "react-icons/si";
import Title from "../Title";
import Layout from "../Layout";
import Animation from "../../helpers/Animation";

const socials = [
  {
    icon: AiOutlineGithub,
    label: "GitHub",
    href: "https://github.com/yube01",
  },
  {
    icon: AiOutlineLinkedin,
    label: "LinkedIn",
    href: "https://np.linkedin.com/in/yubraj-adhikari-581553232",
  },
  {
    icon: AiOutlineMail,
    label: "Email",
    href: "mailto:email@adhikariyubraj.com.np",
  },
  {
    icon: SiNpm,
    label: "npm",
    href: "https://www.npmjs.com/~yube",
  },
  {
    icon: SiProducthunt,
    label: "Product Hunt",
    href: "https://www.producthunt.com/@yubraj_adhikari",
  },
];

export default function Contact() {
  return (
    <Layout id="contact">
      <Title title="Get in Touch" />
      <Animation>
        <div className="max-w-lg">
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out through any of these platforms.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass w-12 h-12 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Animation>
    </Layout>
  );
}
