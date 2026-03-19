import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Android Developer</h4>
                <h5>BOS Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed fintech applications (aCashPay App, OQ PAY) focusing on secure payments processing, mobile/DTH recharge, and retail finance flows including EMI management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Android Developer</h4>
                <h5>Cre Innovations</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led development of high-performance image processing apps including "Text on Video" and "Cartoon Caricature", optimizing feature implementations for end-user creativity workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Android Developer</h4>
                <h5>Clara Edtech Pvt. Ltd.</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed and maintained multiple EdTech Android applications with modules for student attendance, results, fees, and push notifications utilizing Firebase Cloud Messaging (FCM).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer</h4>
                <h5>MyLyfCare Pvt. Ltd.</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Developed full-stack MedTech features spanning across vendor inventory, transaction processing, and automated appointment workflows for doctors and diagnostic labs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer</h4>
                <h5>Mindsmiratus Technologies</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Delivered end-to-end Android development for client projects like Wafi and Logimetrix Infra, implementing REST APIs using Volley and maintaining regular broadcast updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
