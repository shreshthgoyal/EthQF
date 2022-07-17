import "./Sponsors.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CountTo from 'react-count-to';
import {useState, useEffect, useRef} from 'react';
import {abi, address} from '../../config';
import Web3 from 'web3';
import {ToastsContainer, ToastsStore} from 'react-toasts';


const web3 = new Web3();

const Sponsors = () => {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [matchingFund, setMatchingFund] = useState(0.000);
  const [sponsors, setSponsors] = useState([]);
  let arr = [];
  const checkWalletIsConnected = async () => {
    const {ethereum} = window;
    if(!ethereum){
      console.log("Install Metamask please!");
      return;
    }else{
      console.log("All set!");
    }
    try{
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});

      if(accounts.length !== 0){
        const account = accounts[0];
        console.log("Account address : ", account);
        setCurrentAccount(account);
        loadContract();
      }else{
        console.log("No account found");
      }
      
    } catch(error){
      console.log("Error : ", error);
    }
  }

  const loadContract = async () => {
    try{
      let {web3} = window;
      if (typeof web3 !== 'undefined') {
         setWeb3Provider(web3.currentProvider);
          web3 = new Web3(web3.currentProvider)
      } else {
        window.alert('Please connect to Metamask.')
      }
      const {ethereum} = window;

      if (ethereum) {
          window.web3 = new Web3(ethereum)
          try {
            // Request account access if needed
            await ethereum.enable()
          } catch (error) {
            // User denied account access...
          }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        setWeb3Provider(web3.currentProvider);
        window.web3 = new Web3(web3.currentProvider)

      }
      // Non-dapp browsers...
      else {
        console.log(
          'Non-Ethereum browser detected. You should consider trying MetaMask!',
        )
      }
      if(!contract)
      setContract(new web3.eth.Contract(abi, address));
    }catch(error){
       console.log(error);
    }
  }

  const getAmount =  () => {
    val = prompt("Enter amount of ethers you want to contribute :");
 }

  const getMatchingFund = async () => {
    if(contract)
   { const res = await contract.methods.matchingFund().call();
    await setMatchingFund(res);
  }
  }

  const getSponsorsList = async () => {
    if(contract)
    {
      const res = await contract.methods.getAllSponsors().call()
       await setSponsors(...sponsors, res)

    }
  }

  // const getDonations =   () => {

  //   if(contract)
  //   {
  //     Object.values(sponsors).map(async(sponsor) => {
  //     console.log(contract)

  //       let res =  await contract.methods.sponsorToDonation(sponsor).call();
  //   })}
  // }

  let val = 0;
  useEffect(() => {
    checkWalletIsConnected()
    .then(() => {
    getMatchingFund()
    getSponsorsList()
  })
  }, [contract, currentAccount]);

  const donateEth = async () => {
   await getAmount();
   if(val < 5) 
   { 
     ToastsStore.warning("Contribute more than 5 ethers to be a Sponsor!");
     return;
   }
   await contract.methods.donateToMatchingFund().send({from : currentAccount, to:address, value: web3.utils.toWei(val >= 5 ? val : "0", "ether"), gas: 6721950 });   
    window.location.reload();
  }

    return (
        <div>
            <Navbar />
             <section className="features s" >
    <div className="features__container container container--px" >
      <div className="features__text sponsors" >
        <h1 className="features__subtitle subtitle-primary" >Sponsor</h1>
        <h2 className="features__title title-primary">Matching Pool</h2>
        <p className="features__paragraph">
        Contribute to the model of funding public goods where a fund from governments or philanthropic institutions matches individual contributions to a project. <br/><br/>
        Matching round starts automatically as soon as matching pool hits 15 ETH.
        </p>
      </div>

      <div className="features__wrapper sponsors">
        <div className="features__feature feature--1">
          <h2>Sponsors</h2>
          {
           Object.values(sponsors).map( (sponsor) => {
            return (<div key={sponsor}><h3>{sponsor}</h3></div>)
          })
          }
          <h3 className="feature__title stat">
          <CountTo to= {parseFloat(matchingFund)/1000000000000000000} speed={1000} digits={2} />
          </h3>
          <p className="features__paragraph u">
          Ethers funded till date to matching pool.
        </p>
      <button className="hero__cta cta arch spo" onClick={donateEth}>Become a sponsor</button>
        </div>
      </div>
    </div>
  </section>           
        <Footer />
      <ToastsContainer store={ToastsStore}/>
        </div>
    )
}

export default Sponsors;