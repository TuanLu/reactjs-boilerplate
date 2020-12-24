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
  }, []);
  return (
    <div className="cp-faq">
      <ul>
        {faq.map((faq) => (
          <li key={faq.faq_id}>
            <h4>{faq.title}</h4>
            <p style={{ display: "none" }}>{faq.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FAQ);
