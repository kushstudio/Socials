import profile from "@/data/profile.data";
import Avatar from "../avatar/avatar";
import SocialButton from "../socialButton/socialButton";
import "./profileCard.scss";

function ProfileCard() {
    return (
        <div className="profile-card">
            <Avatar src={profile.avatar} alt={profile.name} />
            <h2 className="profile-card__name">{profile.name}</h2>
            <p className="profile-card__location">{profile.location}</p>
            <p className="profile-card__bio">{profile.description}</p>

            <div className="profile-card__socials">
                {profile.links.map((social) => (
                    <SocialButton key={social.label} link={social.url} label={social.label} />
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;
