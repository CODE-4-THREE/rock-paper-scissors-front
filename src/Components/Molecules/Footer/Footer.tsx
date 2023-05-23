import './Footer.scss';
import { useState } from "react";
import { ImageRender } from '../../Modals';
import { IMAGE_RULES } from "../../../Resources/Images/Images";

export default function Footer() {
  const [enableModalRules, setEnableModalRules] = useState(false);
  const Toggle = () => setEnableModalRules(!enableModalRules);
  const rulesModalTille = 'RULES';
  return (
    <footer className='footer'>
       <button className="footer-button" onClick={() => Toggle()}>
        {rulesModalTille}
      </button>
      <ImageRender enableModal={enableModalRules} close={Toggle} img={IMAGE_RULES} title={rulesModalTille}/>
    </footer>  )
}

