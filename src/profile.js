import React from 'react';
import './styles.css';
import Menu from './menu'
import { withTranslation } from 'react-i18next'
import avatar from './avatar.jpg';
import vk from './vk1.png';
import inst from './inst.png';
import link from './link.png';
import git from './git.png';

class  Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "ru"
    }};

    onClick = () => {
      if (this.element ) {
        this.element.scrollIntoView({block: "start", behavior: "smooth"}) 
          
        }
      }
     
    onSetRef = (element) => {
      this.element = element
    }
render() {
  const {t} = this.props
   
    return (
    <div> 
      
      <Menu/>
      <div className="headp" >
      <div className="progress_scroll"></div>
      <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
        <div className="Main" id='top' ref={this.onSetRef}>
        <h3 >{t('profile.h')}</h3>
         <div className="Avatar"><img src={avatar} alt="me"/> </div>
         <h4 >{t('profile.name')}</h4>
         <p >{t('profile.info')}</p>
         <p >{t('profile.why')}</p>
         <p>{t('profile.akvelon')}</p>
        <div className="LineSpacer"></div>
        <h5>{t('profile.skill')}</h5>
        <div className="skills" id='ski'>
          <div className="skill-item red">HTML5</div>
        <div className="skill-item yel">CSS3</div>
        <div className="skill-item orang">JavaScript</div>
        <div className="skill-item green">Node</div>
        <div className="skill-item blu">React</div>
        <div className="skill-item cyan">Git</div>
        <div className="skill-item purple">C#</div>
        <div className="skill-item orang">ES6</div>
        <div className="skill-item red">JQuery</div>
        <div className="skill-item yel">Sass</div>
        <div className="skill-item green"><a href="https://stepik.org/cert/269739" >C++</a></div>
        </div>
        <div className="LineSpacer"></div>
        
        
</div>
      <footer className="footer" id='contact'>
         <div className="foot-cont">

         <div className="foot" ><a className="arrow"  onClick={this.onClick}>  </a>
         <a className ="cont">{t('profile.contact')}</a></div>
           <div className="foot0">

           <div className="text-social">{t('profile.net')}</div>
           <a className="soc-button si" href="https://vk.com/sorrowrest" target="_blank"><img src={vk} alt="me"/></a>
           <a className="soc-button si" href="https://www.instagram.com/sorrowrest" target="_blank"><img src={inst} alt="me"/></a>
           <a className="soc-button si id" href="https://www.linkedin.com/in/ancreator" target="_blank"><img src={link} alt="me"/></a>
           <a className="soc-button si" href="https://github.com/Sorrowrest" target="_blank"><img src={git} alt="me"/></a>
           </div>
           <div className="foot1" >
             <div className="text-social">{t('profile.tele')} <a href="tel:+79303427749">+7-930-342-77-49</a></div>
             <div className="text-social">{t('profile.mail')}  <a href="mailto:nvas3470@gmail.com">nvas3470@gmail.com</a></div>
           </div>
         
           </div>
         
         
      </footer>
        </div>
        
       
    </div>) 

 }   


}


export default withTranslation()(Profile);