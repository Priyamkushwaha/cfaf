import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xA32424E0833E48eE86AdA07d9546a1787B84Fa38"
);

export default instance;
