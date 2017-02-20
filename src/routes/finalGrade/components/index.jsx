 import React from 'react';
 import Helmet from 'react-helmet';

 import SimpleInput from './finalGrade';
 import WeightedGrade from './weightedGrade';
 import './tabs.css';

 export default class FinalGrade extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       currentTab: 'gradeCalc',
     };
     this.onTabChange = this.onTabChange.bind(this);
     this.renderTabContent = this.renderTabContent.bind(this);
   }
   onTabChange(tab) {
     this.setState({ currentTab: tab });
   }

   renderTabContent() {
     const { currentTab } = this.state;
     switch (currentTab) {
       case 'gradeCalc':
         return <SimpleInput />;
       case 'weightedGrade':
         return <WeightedGrade />;
       default:
         return 'gradeCalc';
     }
   }

   render() {
     const { currentTab } = this.state;
     return (
       <div
         className='container col-md-12'
         style={ {
           marginTop: '10vh',
           paddingLeft: '0',
           paddingRight: '0',
         } }
       >
         <Helmet
           title='Bare Minimum | Final Grade Calculator'
           meta={ [
             { name: 'description', content: 'Final grade calculator to help you pass your classes!' },
           ] }
         />

         <div className='well infobox col-md-6 col-md-offset-3 col-sm-12' >
           <div className='row' data-example-id='simple-nav-tabs'>

             <ul className='nav nav-tabs navtabs no-padding scrolling' style={ { marginTop: 0 } } >
               <li role='presentation' className={ currentTab === 'gradeCalc' ? 'active' : '' } >
                 <a onClick={ () => this.onTabChange('gradeCalc') } style={ { paddingLeft: '.8vw', paddingRight: '.8vw', backgroundColor: currentTab === 'gradeCalc' ? '#ffffff' : 'transparent' } }>Final Grade Calc</a>
               </li>
               <li role='presentation' className={ currentTab === 'weightedGrade' ? 'active' : '' } >
                 <a onClick={ () => this.onTabChange('weightedGrade') } style={ { paddingLeft: '.8vw', paddingRight: '.8vw', backgroundColor: currentTab === 'weightedGrade' ? '#ffffff' : 'transparent' } }>Weighted Grade Calc</a>
               </li>
             </ul>
           </div>
           { this.renderTabContent() }
         </div>
       </div>
     );
   }
}
