import "./socialButton.scss";

interface SocialProps {
    link: string;
    label: string;
}

function SocialButton({ link, label }: SocialProps) {
    return (
        <a className="socials" href={link} target="_blank">
            {label}
        </a>
    );
}

export default SocialButton;
