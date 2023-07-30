import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButton() {
  return (
    <DropdownButton id="dropdown-basic-button" title="AI Tools">
      <Dropdown.Item href="Tools">Fusion Brain</Dropdown.Item>
      <Dropdown.Item href="https://inpainter-stable-diffusion-beige.vercel.app/">Inpaintern</Dropdown.Item>
      <Dropdown.Item href="https://scribble-diffusion-ivory-six.vercel.app/">Scribble Diffusion</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButton;
