import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const CardTeam = ({ photo, name, role, socialLinks }) => {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={photo} alt={`${name}-profile`} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {role}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        {socialLinks?.map(({ platform, url, iconClass, tooltip }) => (
          <Tooltip key={platform} content={tooltip}>
            <Typography
              as="a"
              href={url}
              variant="lead"
              color={platform === "LinkedIn" ? "blue" : "light-blue"}
              textGradient
            >
              <i className={iconClass} />
            </Typography>
          </Tooltip>
        ))}
      </CardFooter>
    </Card>
  );
};

// Adding PropTypes for validation
CardTeam.propTypes = {
  photo: PropTypes.string.isRequired, // Ensures 'photo' is a required string
  name: PropTypes.string.isRequired, // Ensures 'name' is a required string
  role: PropTypes.string.isRequired, // Ensures 'role' is a required string
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired, // Ensures each social link has a platform name
      url: PropTypes.string.isRequired, // Ensures each social link has a URL
      iconClass: PropTypes.string.isRequired, // Ensures each social link has an icon class
      tooltip: PropTypes.string.isRequired, // Ensures each social link has a tooltip text
    })
  ).isRequired, // Ensures 'socialLinks' is a required array
};

export default CardTeam;
