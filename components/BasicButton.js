import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButton() {
  return (
    <DropdownButton id="dropdown-basic-button" title="AI Tools">
      <Dropdown.Item href="Tools">Fusion Brain</Dropdown.Item>
      <Dropdown.Item href="https://inpainter-stable-diffusion-beige.vercel.app/">Inpainter</Dropdown.Item>
      <Dropdown.Item href="https://scribble-diffusion-ivory-six.vercel.app/">Scribble Diffusion</Dropdown.Item>
   <Dropdown.Item href="https://paint-by-text-tau.vercel.app/">Text-to-paint</Dropdown.Item>
       <Dropdown.Item href="https://next-stable-diffusion-replicate-text2img.vercel.app/">Stable Diffusion</Dropdown.Item>
   <Dropdown.Item href="https://ai-code-translator2-ochre.vercel.app/">Code Translator</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButton;
