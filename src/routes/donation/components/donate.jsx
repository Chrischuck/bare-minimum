import React from 'react';

const Donate = () =>
  <div className='row text-center'>
    <h1>Donate</h1>
    <h3>Venmo us your donation at: @BareMinimumDonations</h3>
    <div className='col-md-8 col-md-offset-2'>
        <h4>About Us</h4>
        <p>
            Bare Minimum was created based on college students’ hunger for success.
            We are here to provide the best way to ensure good grades and even better GPAs
            and we strive to make your college life easier, by donating you do the bare minimum to achieve greatness.
        </p>
        <h4> Why We Donate</h4>
        <p>
            Despite being college students ourselves,
            we believe in helping others achieve their dreams,
            which is why we created this site. With this website,
            you not only can you get stellar grades, you get the chance to aid charities.
            Even if you donate 50 cents, every little bit adds up and we can all help the planet be a better place!
        </p>
        <h4>Where Does the Money Go</h4>
        <p>
            First and foremost, donated money will pay off our servers and domain name in order to keep this site running and ad free.
            This runs us around $6 per month. However, any extra cash we make we will donate to charity!
            Bare Minimum gives all donations to the charities listed below.
            We are politically neutral with our donation choices and strive to donate to charities to either help other humans or our planet earth.
            We center our efforts towards the Breast Cancer Research Foundation and the Waterkeeper Alliance.
            In addition to those, we also choose two additional charities to fund.
            If you know of a reputable charity that may need our help, feel free to write it in your venmo comment or email us and we will give it our consideration!
        </p>
        <h4>Current Charities</h4>
        <p>
            Breast Cancer Research Foundation: <a href='https://www.bcrfcure.org'>www.bcrfcure.org</a><br />
            Waterkeeper Alliance: <a href='https://www.waterkeeper.org'>www.waterkeeper.org</a><br />
            Animal Welfare Institute: <a href='https://www.awionline.org'>www.awionline.org</a><br />
            Global Hunger Project: <a href='https://www.thp.org'>www.thp.org</a><br />
            Doctors Without Borders: <a href='https://www.doctorswithoutborders.org'>www.doctorswithoutborders.org</a><br />
        </p>
        <h4>Donate!</h4>
        <p>
            Venmo us: <span style={ { fontWeight: 'bold' } }>@BareMinimumDonations</span> and leave us a comment!
        </p>
    </div>
  </div>;

export default Donate;
