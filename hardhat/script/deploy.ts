import hardhat from "hardhat";

const deploy_contract = async (): Promise<string> => {
  try {
    const my_contract = await hardhat.ethers.getContractFactory("Information");
    const contract = await my_contract.deploy();
    return contract.target.toString();
  } catch (error) {
    console.log(error);
    return "contract has not been deployed";
  }
};

deploy_contract()
  .then((address: string) => {
    console.log("deplyed contract address: ", address);
  })
  .catch((error: Error) => {
    console.log("error while deploying contract: ", error);
  });
