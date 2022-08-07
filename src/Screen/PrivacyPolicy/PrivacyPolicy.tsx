import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import HorizantalLine from '../../Component/Button/HorizantalLine/HorizantalLine';
import {mappin} from '../../../assets/images/mappin';
import {OpenletterIcon} from '../../../assets/images/OpenletterIcon';
import PreviewHeader from '../../Component/Button/PreviewHeader/PreviewHeader';

const PrivacyPolicy = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <PreviewHeader name="Privacy Policy" />
      <ScrollView contentContainerStyle={{paddingHorizontal: hp(2)}}>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          At Gharbaar, accessible from https://gharbaar.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Gharbaar and how we use it.{'\n'}
          {'\n'} This Privacy Policy applies only to our online activities and
          is valid for visitors to our website with regards to the information
          that they shared and/or collected in Gharbaar. This policy is not
          applicable to any information collected offline or via channels other
          than this app.
        </Text>
        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Consent
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          By using our website to buy, sell, rent or even connect to a real
          estate pro, we know that you are trusting us with your data. We are
          also completely responsible to protect your information and the way we
          process your personal data that you provide to us.
        </Text>
        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Information Collected by Gharbaar
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          BThe personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.{'\n'}
          {'\n'} If you contact us directly, we may receive additional
          information about you such as your name, email address, phone number,
          the contents of the message and/or attachments you may send us, and
          any other information you may choose to provide.{'\n'}
          {'\n'} When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Who Processes Your Data
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Your personal data will be processed by us and any other company
          within our group. Each of these companies is authorized to use your
          data in accordance with our privacy policy practices.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Why Processing Your Information
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          The purpose of processing your information is to fulfill the orders
          that you place at Gharbaar.com. With your provided information, we can
          inform you about the special offers and provide you with other
          marketing information that might be helpful to you. Therefore, we
          process your information for the following purposes, including to:
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Complete your transactions
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Provide and improve our services
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Communicate and connect you with others
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Personalize your experience
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Provide, operate, and maintain our website
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Improve, personalize, and expand our website
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Understand and analyze how you use our website
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Develop new products, services, features, and functionality
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Send you emails
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Find and prevent fraud
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Log Files
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Gharbaar follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files includes internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Cookies and Web Beacons
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Like any other website, Gharbaar.com uses 'cookies'. These cookies are
          used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The use of
          cookies helps us to understand what kind of services you are
          interested in and how we can provide you with a consistent experience
          every time you visit Gharbaar.com. The information is used to optimize
          the users' experience by customizing our web page content based on
          visitors' browser type and/or other information.{'\n'}
          {'\n'} In particular, we use cookies to:.
        </Text>

        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Provide users with personalized features such as automatically
            logging in to your personalized homepage.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To ensure our products are working efficiently by diagnosing and
            correcting bugs and errors.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To collect and process the information on user preferences.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To make sure authentic persons are attempting to log on.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To improve the Q&A platform.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To support apps integration.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To see which ads you click.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To measure the effectiveness of ads and campaigns.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To monitor site traffic.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            To collect click data for service optimization.
          </Text>
        </View>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Cookies and their use may change over time and for that reason,
          Gharbaar will make the possible efforts to notify you by updating this
          cookie policy. Please note that we and our housing project clients may
          use cookies or other tools to know more about the user’s interest in
          their products and services.{'\n'}
          {'\n'} You can choose to disable cookies through your individual
          browser options. To know more detailed information about cookie
          management with specific web browsers, it can be found at the
          browsers' respective websites..
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Google DoubleClick DART Cookie
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL – https://policies.google.com/technologies/ads
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Advertising Partners Privacy Policies
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Gharbaar. {'\n'}
          {'\n'}Third-party ad servers or ad networks use technologies like
          cookies, JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Gharbaar, which are sent
          directly to users' browsers. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.{'\n'}
          {'\n'} Note that Gharbaar has no access to or control over these
          cookies that are used by third-party advertisers.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Third-Party Privacy Policies
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Gharbaar's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Request that a business deletes any personal data about the consumer
            that a business has collected.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          GDPR Data Protection Rights
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:.
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Security Measures
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          We have also taken security measures to protect the personal
          information that you have provided to us. We have built security into
          our products and services to help protect data from improper use,
          unauthorized access, disclosure, destruction, and alteration.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Disclaimer of Warranty And Liability
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Here are the following provisions that are not allowed by the laws of
          certain jurisdictions. Therefore, the below provisions are to read as
          limiting so as to satisfy such laws.
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We do not guarantee that the information provided on the website is
            accurate, complete, or latest.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We hold no liability with respect to how you use such information.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            The provided information is not written for individual requirements.
            So, you are responsible for how you will satisfy yourself prior to
            ordering any product or service from us.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We did our best to exclude viruses from our website, we are still
            not in a position to ensure such exclusion. Thus, it is advisable to
            take all the appropriate actions before downloading anything from
            this website.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            All warranties are hereby excluded.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Neither us nor any of our employees will be responsible for any kind
            of damage such as loss of profits, compensatory or incidental
            damages even if we have been advised of the possibility of such
            loss.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            caused by linking to any other website from this website
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Children's Information
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.{'\n'}
          {'\n'}
          Gharbaar does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Copyright
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          Each and everything on the website which includes its design, text,
          graphic, and other arrangements, etc are Copyright © 2020 Gharbaar Pvt
          Ltd. All Rights Reserved.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          For Further Inquiries
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          To access the information on this website, you must accept our terms
          and disclaimer mentioned above. You can leave this website if you do
          not accept any of our terms.{'\n'}
          {'\n'} If you have any queries that we have not answered here, you can
          get in touch with us via our Contact page.
        </Text>
      </ScrollView>
    </View>
  );
};
export default PrivacyPolicy;
