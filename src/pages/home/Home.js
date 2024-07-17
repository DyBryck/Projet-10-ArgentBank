import React from "react";
import FeatureItem from "../../components/feature-item/FeatureItem";
import Hero from "../../components/hero/Hero";
import iconChat from "../../images/icon-chat.png";
import iconMoney from "../../images/icon-money.png";
import iconSecurity from "../../images/icon-security.png";

const Home = () => {
  return (
    <>
      <Hero>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </Hero>
      <section className="features">
        <FeatureItem
          imageSource={iconChat}
          imageAlt="Chat Icon"
          title="You are our #1 priority"
          paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          imageSource={iconMoney}
          imageAlt="Money Icon"
          title="More savings means higher rates"
          paragraph="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          imageSource={iconSecurity}
          imageAlt="Security Icon"
          title="Security you can trust"
          paragraph="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </>
  );
};

export default Home;
