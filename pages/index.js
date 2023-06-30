import React, { useEffect,useState } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import factory from "../ethereum/factory";
import campaignFactory from "../ethereum/campaign"
import Layout from "../components/Layout";
import { Link } from "../routes";
import campaign from "../ethereum/campaign";

const CampaignIndex = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaigns = async () => {
      const campaignsData = await factory.methods.getDeployedCampaigns().call();
      
      setCampaigns(campaignsData);
    };

    getCampaigns();
  }, []);

  const renderCampaigns = () => {
    return campaigns.map(({ name, description, location }) => {
      return {
        header: name,
        meta: (
          <div>
            Address of Campaign: {location}
          </div>
        ),
        description: (
          <div>
            <p>{description}</p>
            <Link route={`/campaigns/${location}`}>
              <a>View Campaign</a>
            </Link>
          </div>
        ),
        extra: (
          <div>
            <Icon name='user' />
          </div>
        ),
        fluid: true,
      };
    });
  };

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </a>
        </Link>
        <Card.Group items={renderCampaigns()} />
      </div>
    </Layout>
  );
};

export default CampaignIndex;
