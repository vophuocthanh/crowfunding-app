import React, { Fragment, useEffect } from "react";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import Gap from "../components/common/Gap";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const DashBoardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    async funtion fetchCampaign () {

    }
  }, [])
  return (
    <Fragment>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashBoardPage;
