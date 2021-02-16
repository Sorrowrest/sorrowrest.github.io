import React from 'react';
import './styles.css';
import { withTranslation } from 'react-i18next'
import { HashLink as Link } from 'react-router-hash-link';
class  Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          value: "ru"
        }};
  onLanguageHandle = (event) => {
        let newLang = event.target.value;
        this.setState({value: newLang})
        this.props.i18n.changeLanguage(newLang)
      }
     
      renderRadioButtons = () => {
        return (
          <div className="lang">
           <div className="items"> 
          <input id="rus" name="language" value="ru" 
          checked={this.state.value === 'ru'}
          type="radio" onChange={(e) => this.onLanguageHandle(e)} />&nbsp; 
          <label htmlFor="rus">RU</label></div>
          <div className="items"><input id="eng"
          checked={this.state.value === 'en'}
          name="language" onChange={(e) => this.onLanguageHandle(e)} value="en" type="radio" />
          <label htmlFor="eng">EN</label></div>
          </div> 
        )
      }
      
   render () {
   const {t} = this.props
   console.log('this is', this)
   
   return (
   
        <header className="menu">
      

      <div className="navigation">
      
      <Link to='/' className="logo "> ancreator.</Link>
      <div id="menuToggle">
      <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
          <ul className="main_menu" id="menu" >
          <Link to='/' className="logo n "> ancreator.</Link>
              <li> <Link to='/profile' >{t('header.left')}  </Link>  </li>
              <li> <Link to='/profile#ski' >{t('header.center')}</Link></li>
              <li > <Link to='/profile#contact'>{t('header.right')}</Link></li>
           
          <div className="language">             
      { this.renderRadioButtons() }
      </div>
          </ul> 
       </div>   
       </div>
    </header>
        
      )
    }
    

   }

export default withTranslation()(Menu);