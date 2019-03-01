import React, { Component } from "react";
import Slider from "react-slick";
import baguetteBox from "baguettebox.js";


const headlines = [
  "Built by a development team with over 100 years of experience in audit data analysis and process build.",
  "Designed by Steven Davison, co-author of FAST Certification, quality review of ISO 19770-1, and ITIL SAM version 3.",
  "Benchmark statistics from over 500 reviews globally.",
  "Based on the ITIL and ISO concept.",
  "Over 15 industry sectors.",
  "Over 50 Microsoft, Oracle, IBM, and SAP Global View case studies."
];

const features = [
  {
    title: "Best Practice SAM industry assessment with over 400 questions",
    desc:
      "Gain input into the assessment from all parts of the organisation that touch software.",
    image: require("../../../assets/media/samsentry-align-small.png")
  },
  {
    title: "Multiple assessments and improvement tracking",
    desc:
      "Compare assessment results with graphical representations for the key process areas to see how your SAM implementation is progressing. Evaluate your SAM infrastructure against the principles of industry standards, best practice frameworks and our long-standing knowledge of the SAM industry.",
    image: require("../../../assets/media/samsentry-dashboard-small.png")
  },
  {
    title: "Cloud readiness & transition review",
    desc:
      "Understand where cloud solutions make sense and where on-premises remains the best option, and how to bridge those gaps in the simplest possible way.",
    image: require("../../../assets/media/samsentry-cloud-small.png")
  },
  {
    title: "Software Global View",
    desc:
      "Vendor audit stories shared anonymously by our clients, including audit dates, vendor, company " +
      "size, timescale for completion, who and why performed the audit, audit methodology, issues encountered, and negotiating notes.",
    image: require("../../../assets/media/samsentry-audit-watch-small.png")
  },
  {
    title: "Radar view",
    desc:
      "Get a radar view of your SAM optimisation efforts. Graphical reporting with clear visual data allows SAM " +
      "Managers to demonstrate to management teams in a succinct and practical manner.",
    image: require("../../../assets/media/samsentry-radar-view-small.png")
  },
  {
    title: "Starburst linked to actions",
    desc:
      "Focus on underperforming areas of software management, critical to the success of a SAM program.",
    image: require("../../../assets/media/samsentry-starburst-small.png")
  },
  {
    title: "Detailed recommendations with scheduled timescales",
    desc:
      "Create a timeline of activities and assign resource to complete them to detail business requirements for an effective SAM system.",
    image: require("../../../assets/media/samsentry-action-plan-horizontal-small.png")
  },
  {
    title: "Audit methodology notarised on the blockchain",
    desc:
      "SAMSentry anchors permanent timestamps in the blockchain to provide an undisputable and immutable Proof of Existence while keeping your data private.",
    image: require("../../../assets/media/samsentry-licence-reviews-small.png")
  }
];
const backgroundColors = [
  "bg-white",
  "bg-grey-lightest",
  "bg-grey-lighter",
  "bg-grey-light",
  "bg-grey",
  "bg-grey-dark",
  "bg-grey-darker",
  "bg-grey-darkest"
];

class Features extends Component {
  componentDidMount() {
    baguetteBox.run(".gallery");
  }
  render() {
    return (
      <div className="container-fluid paddingZero">
        <div className="FeaturesTextColor">
          <Slider autoplay={true} arrows={false} pauseOnHover={false}>
            {headlines.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </Slider>
        </div>
        <div className="gallery">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={
                backgroundColors[idx % backgroundColors.length] +
                (idx % backgroundColors.length > 3 ? " text-white" : "")
              }
            >
              <div className="container-fluid featureCaraouselDiv">
                <div
                  className={
                    "items-center" + (idx % 2 !== 0 ? " flex-row-reverse" : "")
                  }
                >
                  <div className="text-center">{feature.title}</div>
                  <div className="text-base col-md-6">{feature.desc}</div>
                  <div className="imgDiv col-md-6">
                    <a href={feature.image} title={feature.title}>
                      <img
                        src={feature.image}
                        className="shadow-md hover:shadow-lg"
                        width="100%"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Features;
