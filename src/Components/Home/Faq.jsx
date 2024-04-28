import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col gap-5 text-left">
      <div className="collapse collapse-plus bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>We accept payment via all major credit and debit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal for your convenience.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How long will it take to receive my order?
        </div>
        <div className="collapse-content">
          <p>The delivery time depends on your location and the shipping method chosen at checkout. Generally, orders within the United States arrive within 5-7 business days. International orders may take longer, typically arriving within 10-14 business days.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Can I return or exchange an item if I'm not satisfied?
        </div>
        <div className="collapse-content">
          <p>Yes, we offer a hassle-free return and exchange policy. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please note that the item must be unused and in its original packaging to be eligible for a return or exchange.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Do you offer wholesale pricing for bulk orders?
        </div>
        <div className="collapse-content">
          <p>Yes, we offer wholesale pricing for bulk orders. Please contact our customer service team at [email address] for more information on wholesale pricing, minimum order quantities, and lead times.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Do you ship internationally?
        </div>
        <div className="collapse-content">
          <p>Yes, we ship our products worldwide. International shipping rates and delivery times vary depending on the destination. Please note that customers are responsible for any customs duties or taxes imposed by their country's customs regulations.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
