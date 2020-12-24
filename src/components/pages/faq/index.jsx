import React, { memo, useEffect, useContext } from "react";
import FAQContext from "src/contexts/faq";
import API from "src/api";

const FAQ = () => {
  const { faq, setFaq } = useContext(FAQContext);
  useEffect(() => {
    const loadFaqs = async () => {
      const { data: listFaq } = await API.get("/faqs");
      setFaq(listFaq);
    };
    if (!faq.length) {
      loadFaqs();
    }
  }, [faq, setFaq]);
  return (
    <div className="cp-faq">
      <ul>
        {faq.map((faqItem) => (
          <li key={faqItem.faq_id}>
            <h4>{faqItem.title}</h4>
            <p style={{ display: "none" }}>{faqItem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FAQ);
