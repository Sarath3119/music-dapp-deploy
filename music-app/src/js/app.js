// App = {
//   web3Provider: null,
//   contracts: {},
//   address: "0xBf70Cca89C6dA214149759Cf3d6BdaF4e7FcC583",
//   names: new Array(),
//   // url: 'http://127.0.0.1:7545',
 
//   web3: null,
//   contracts: {},
//   network_id: 3, // 5777 for local
//   handler: null,
//   value: 1000000000000000000,
//   index: 0,
//   margin: 10,
//   left: 15,
//   abi: [
//     {
//       "inputs": [
//         {
//           "internalType": "bool",
//           "name": "isFullyOwned",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "approved",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "bool",
//           "name": "approved",
//           "type": "bool"
//         }
//       ],
//       "name": "ApprovalForAll",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "bidder",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "MusicAlbumBidPlaced",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "artist",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         }
//       ],
//       "name": "MusicAlbumListed",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "artist",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         }
//       ],
//       "name": "MusicAlbumMinted",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "buyer",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "MusicAlbumSold",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "artist",
//           "type": "address"
//         }
//       ],
//       "name": "MusicAlbumUnlisted",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "name": "_artistDetails",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "nameArtist",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "appreciationScore",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "_musicAlbums",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "internalType": "address payable",
//           "name": "artist",
//           "type": "address"
//         },
//         {
//           "internalType": "string",
//           "name": "artistName",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         },
//         {
//           "internalType": "bool",
//           "name": "forSale",
//           "type": "bool"
//         },
//         {
//           "internalType": "uint256",
//           "name": "percentageOwnershipTransfered",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "getApproved",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         }
//       ],
//       "name": "isApprovedForAll",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "name",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "ownerOf",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "safeTransferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "bytes",
//           "name": "data",
//           "type": "bytes"
//         }
//       ],
//       "name": "safeTransferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         },
//         {
//           "internalType": "bool",
//           "name": "approved",
//           "type": "bool"
//         }
//       ],
//       "name": "setApprovalForAll",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes4",
//           "name": "interfaceId",
//           "type": "bytes4"
//         }
//       ],
//       "name": "supportsInterface",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "tokenURI",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "artistName",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "percentageOwnershipTransfered",
//           "type": "uint256"
//         }
//       ],
//       "name": "mintMusicNFT",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         }
//       ],
//       "name": "getMusicAlbum",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "uint256",
//               "name": "id",
//               "type": "uint256"
//             },
//             {
//               "internalType": "address payable",
//               "name": "artist",
//               "type": "address"
//             },
//             {
//               "internalType": "string",
//               "name": "artistName",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "name",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "description",
//               "type": "string"
//             },
//             {
//               "internalType": "uint256",
//               "name": "price",
//               "type": "uint256"
//             },
//             {
//               "internalType": "bool",
//               "name": "forSale",
//               "type": "bool"
//             },
//             {
//               "internalType": "uint256",
//               "name": "percentageOwnershipTransfered",
//               "type": "uint256"
//             }
//           ],
//           "internalType": "struct MusicAlbums.MusicAlbum",
//           "name": "",
//           "type": "tuple"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "Price",
//           "type": "uint256"
//         }
//       ],
//       "name": "listMusicForSale",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         }
//       ],
//       "name": "unlistMusicFromSale",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "BidQuote",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function",
//       "payable": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "sellMusicRights",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferether",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function",
//       "payable": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "artistStats",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "viewHighestBidder",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "viewHighestBid",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "sendProfits",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function",
//       "payable": true
//     }
//   ],
  
//   init: function () {
//     console.log("Checkpoint");

//     return App.initWeb3();
//   },

//   // initWeb3: function () {
//   //   // Is there is an injected web3 instance?
//   //   if (typeof web3 !== 'undefined') {
//   //     App.web3Provider = web3.currentProvider;
//   //   } 
//   //   web3 = new Web3(App.web3Provider);

//   //   ethereum.enable();

//   //   // App.populateAddress();
//   //   return App.initContract();
//   // },

//   // initContract: function () {
//   //   $.getJSON('MusicAlbums.JSON', function (data) {
//   //     // Get the necessary contract artifact file and instantiate it with truffle-contract
//   //     var Music = data;
//   //     App.contracts.music = TruffleContract(Music);

//   //     // Set the provider for our contract
//   //     App.contracts.music.setProvider(App.web3Provider);

//   //     // App.getChairperson();
//   //     return App.bindEvents();
//   //   });
//   // },

//   // init: function () {
//   //   return App.initWeb3();
//   // },

//   // initWeb3: function () {
//   //   if (typeof web3 !== "undefined") {
//   //     App.web3 = new Web3(Web3.givenProvider);
//   //   } else {
//   //     App.web3 = new Web3(App.url);
//   //   }
//   //   ethereum.request({ method: "eth_requestAccounts" });
//   //   return App.initContract();
//   // },


//   initWeb3: async function () {
//     if (typeof web3 !== "undefined") {
//       App.web3 = new Web3(Web3.givenProvider);
//     } else {
//       // If no injected web3 instance is available, you can display an error message or prompt users to install MetaMask
//       alert("Please install MetaMask or another web3 provider.");
//       return;
//     }
  
//     await ethereum.request({ method: "eth_requestAccounts" });
//     return App.initContract();
//   },
  

//   initContract: function () {
//     App.contracts.MusicAlbums = new App.web3.eth.Contract(App.abi, App.address, {});
//     return App.bindEvents();
//   },
//   bindEvents: function () {
//     $(document).on('click', '#list', function () {
//       var ad1 = $('#music_id').val();
//       var aa1 = $('#min_price').val();
//       App.handleList(ad1, aa1);
//     });
//     $(document).on('click', '#unlist', function () {
//       var ad = $('#music_id').val();
//       App.handleUnlist(ad);
//     });
//     $(document).on('click', '#bsubmit', function () {
//       var ada = $('#song--id').val();
//       var aaa = $('#bidval').val();
//       App.handleBid(ada, aaa);
//     });
//     $(document).on('click', '#highest-bid', function () {
//       var ad = $('#music--id').val();
    
//       App.handleHbid(ad);
//     });
//     $(document).on('click', '#mint-btn', function () {
//       var artist_name = $('#artist-name').val();
//       var music_name =  $('#music-name').val();
//       var music_desc =  $('#music-desc').val();
//       var m_price =  $('#min-price').val();
//       var percent_transfer =  $('#percent').val();
    
//       App.handleMint(artist_name,music_name,music_desc,m_price,percent_transfer);
//     });
//     $(document).on('click', '#highest-bidder', function () {
//       var ad = $('#music--id').val();
    
//       App.handleHbidder(ad);
//     });
//     $(document).on('click', '#sell', function () {
//       var ad = $('#sell-id').val();
    
//       App.handlesellrights(ad);
//     });
//     $(document).on('click', '#buy', function () {
//       var ad = $('#buy-id').val();
//       var amount = $('#send').val();
    
//       App.handlebuyrights(ad,amount);
//     });
//     $(document).on('click', '#ssubmit', function () {
//       var ad = $('#sid').val();
//       var amount = $('#profit').val();
//       App.handlesendprofits(ad,amount);
//     });
    
//     // $(document).on('click', '#recievefunds-btn',function () { var ad = $('#recamount').val(); App.handleReceiveFunds(ad); });
//   },


//   // populateAddress: function () {
//   //   new Web3(new Web3.providers.HttpProvider(App.url)).eth.getAccounts((err, accounts) => {
//   //     console.log("in here");
//   //     web3.eth.defaultAccount = web3.eth.accounts[0];
//   //     console.log(web3.eth.defaultAccount);
//   //     jQuery.each(accounts, function (i) {
//   //       if (web3.eth.coinbase != accounts[i]) {
//   //         // var optionElement = '<option value="' + accounts[i] + '">' + accounts[i] + '</option';
//   //         // jQuery('#enter_address').append(optionElement);
//   //         console.log(web3.eth.defaultAccount)
//   //       }
//   //     });
//   //   });
//   // },

//   handleList: function (music_id,min_pric) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.listMusicForSale(parseInt(music_id), parseInt(min_pric),{from:account});
//       }).then(function (result, err) {
   
//       })
//     })
//   },

//   handleBid: function (music_id,bid) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       console.log(account);
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.BidQuote( parseInt(music_id) ,parseInt(bid),{from:account});
//       }).then(function (result, err) {
      
//       })
//     })
//   },

//   handleHbid: function (music_id) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.viewHighestBid( parseInt(music_id));
//       }).then(function (result, err) {
//         if (result) {
//           console.log(result);
//           console.log(result);
//           const value =result;
//           const resultElement = document.getElementById("h-bid");
//           resultElement.innerHTML = `Highest Bid: ${JSON.stringify(result)}`;

//         } else {
//           alert(" donation failed")
//         }
//       })
//     })
//   },

//   handleHbidder: function (music_id) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.viewHighestBidder( parseInt(music_id));
//       }).then(function (result, err) {
//         if (result) {
//           console.log(result);
//           const value =result;
//           const resultElement = document.getElementById("h-bidder");
//           resultElement.innerHTML = `Highest Bidder: ${JSON.stringify(result)}`;

//         } else {
//           // alert(" donation failed")
//         }
//       })
//     })
//   },

//   handleMint: function (musicname, Description, artistname, p, percent) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       console.log(account);
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
//         console.log(parseInt(p),parseInt(percent));
  
//         return musicinstance.mintMusicNFT( musicname, Description, artistname,  parseInt(p),  parseInt(percent),{from:account});
//       }).then(function (result, err) {
//         if (result) {
//           console.log(result);
//           const resultElement = document.getElementById("token-id");
//           json_string=JSON.stringify(result)
//           data = JSON.parse(json_string)
//           topics = data['logs'][1]['args']['id']

          
//           // token_id = parseInt(topics[2], 16)

          
//           // resultElement.innerHTML = `Retrieved value: ${token_id}`;
//           // resultElement.innerHTML = `Retrieved value: ${tokenidNumber}`; 
//           resultElement.innerHTML = `Token: ${JSON.stringify(topics)}`;

//         } else {
//           alert("minting failed");
//         }
//       });
//     });
//   } ,

//   handleUnlist: function (music_id) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.unlistMusicFromSale( parseInt(music_id),{from:account});
//       }).then(function (result, err) {
//         /*if (result) {
//           console.log(result)
//           if (parseInt(result.receipt.status) == 1)
//             alert("You have successfully donated an Amount of "+ amount + " ETH")
//           else
//             alert(amount + " donation not done successfully due to revert")
//         } else {
//           alert(amount + " donation failed")
//         }*/
//       })
//     })
//   },
//   handlesellrights: function (music_id) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.sellMusicRights( parseInt(music_id),{from:account});
//       }).then(function (result, err) {
//         console.log(music_id)
//         console.log(account)
//         /*if (result) {
//           console.log(result)
//           if (parseInt(result.receipt.status) == 1)
//             alert("You have successfully donated an Amount of "+ amount + " ETH")
//           else
//             alert(amount + " donation not done successfully due to revert")
//         } else {
//           alert(amount + " donation failed")
//         }*/
//       })
//     })
//   }
//   ,
//   handlebuyrights: function (music_id, amount) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.transferether( parseInt(music_id),{from:account, value : parseInt(amount)*1e18});
//       }).then(function (result, err) {
//         /*if (result) {
//           console.log(result)
//           if (parseInt(result.receipt.status) == 1)
//             alert("You have successfully donated an Amount of "+ amount + " ETH")
//           else
//             alert(amount + " donation not done successfully due to revert")
//         } else {
//           alert(amount + " donation failed")
//         }*/
//       })
//     })
//   }
//   ,
//   handlesendprofits: function (music_id, amount) {
//     var musicinstance;
//     web3.eth.getAccounts(function (error, accounts) {
//       var account = accounts[0];
//       App.contracts.music.deployed().then(function (instance) {
//         musicinstance = instance;
        
//         return musicinstance.sendProfits( parseInt(music_id),{from:account, value : parseInt(amount)*1e18});
//       }).then(function (result, err) {
//         /*if (result) {
//           console.log(result)
//           if (parseInt(result.receipt.status) == 1)
//             alert("You have successfully donated an Amount of "+ amount + " ETH")
//           else
//             alert(amount + " donation not done successfully due to revert")
//         } else {
//           alert(amount + " donation failed")
//         }*/
//       })
//     })
//   }
  
  
//  };

// $(function () {
//   $(window).load(function () {
//     App.init();
//   });
// });


// App = {
//   web3: null,
//   contracts: {},
//   address: "0xBf70Cca89C6dA214149759Cf3d6BdaF4e7FcC583",
//   names: new Array(),
//   url: "http://127.0.0.1:7545",
//   chairPerson: null,
//   currentAccount: null,

//   init: function () {
//       console.log("Checkpoint");
  
//       return App.initWeb3();
//   },

//   initWeb3: function () {
//     if (typeof web3 !== "undefined") {
//       App.web3 = new Web3(Web3.givenProvider);
//     } else {
//       App.web3 = new Web3(App.url);
//     }
//     ethereum.request({ method: "eth_requestAccounts" });

//     // App.populateAddress();
//     return App.initContract();
//   },

//   initContract: function () {
//     App.contracts.music = new App.web3.eth.Contract(App.abi, App.address, {});
//     return App.bindEvents();
//   },

//   bindEvents: function () {
//       $(document).on('click', '#list', function () {
//         var ad1 = $('#music_id').val();
//         var aa1 = $('#min_price').val();
//         App.handleList(ad1, aa1);
//       });
//       $(document).on('click', '#unlist', function () {
//         var ad = $('#music_id').val();
//         App.handleUnlist(ad);
//       });
//       $(document).on('click', '#bsubmit', function () {
//         var ada = $('#song--id').val();
//         var aaa = $('#bidval').val();
//         App.handleBid(ada, aaa);
//       });
//       $(document).on('click', '#highest-bid', function () {
//         var ad = $('#music--id').val();
      
//         App.handleHbid(ad);
//       });
//       $(document).on('click', '#mint-btn', function () {
//         var artist_name = $('#artist-name').val();
//         var music_name =  $('#music-name').val();
//         var music_desc =  $('#music-desc').val();
//         var m_price =  $('#min-price').val();
//         var percent_transfer =  $('#percent').val();
      
//         App.handleMint(artist_name,music_name,music_desc,m_price,percent_transfer);
//       });
//       $(document).on('click', '#highest-bidder', function () {
//         var ad = $('#music--id').val();
      
//         App.handleHbidder(ad);
//       });
//       $(document).on('click', '#sell', function () {
//         var ad = $('#sell-id').val();
      
//         App.handlesellrights(ad);
//       });
//       $(document).on('click', '#buy', function () {
//         var ad = $('#buy-id').val();
//         var amount = $('#send').val();
      
//         App.handlebuyrights(ad,amount);
//       });
//       $(document).on('click', '#ssubmit', function () {
//         var ad = $('#sid').val();
//         var amount = $('#profit').val();
//         App.handlesendprofits(ad,amount);
//       });
      
//       // $(document).on('click', '#recievefunds-btn',function () { var ad = $('#recamount').val(); App.handleReceiveFunds(ad); });
//     },

//     handleList: function (music_id,min_pric) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.listMusicForSale(parseInt(music_id), parseInt(min_pric),{from:account});
//         }).then(function (result, err) {
//           /*if (result) {
//             console.log(result)
//             if (parseInt(result.receipt.status) == 1)
//               alert("You have successfully donated an Amount of "+ amount + " ETH")
//             else
//               alert(amount + " donation not done successfully due to revert")
//           } else {
//             alert(amount + " donation failed")
//           }*/
//         })
//       })
//     },
  
//     handleBid: function (music_id,bid) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         console.log(account);
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.BidQuote( parseInt(music_id) ,parseInt(bid),{from:account});
//         }).then(function (result, err) {
//           /*if (result) {
//             console.log(result)
//             if (parseInt(result.receipt.status) == 1)
//               alert("You have successfully donated an Amount of "+ amount + " ETH")
//             else
//               alert(amount + " donation not done successfully due to revert")
//           } else {
//             alert(amount + " donation failed")
  
  
  
//           }*/
//         })
//       })
//     },
  
//     handleHbid: function (music_id) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.viewHighestBid( parseInt(music_id));
//         }).then(function (result, err) {
//           if (result) {
//             console.log(result);
//             console.log(result);
//             const value =result;
//             const resultElement = document.getElementById("h-bid");
//             resultElement.innerHTML = `Highest Bid: ${JSON.stringify(result)}`;
  
//           } else {
//             alert(" donation failed")
//           }
//         })
//       })
//     },
  
//     handleHbidder: function (music_id) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.viewHighestBidder( parseInt(music_id));
//         }).then(function (result, err) {
//           if (result) {
//             console.log(result);
//             const value =result;
//             const resultElement = document.getElementById("h-bidder");
//             resultElement.innerHTML = `Highest Bidder: ${JSON.stringify(result)}`;
  
//           } else {
//             // alert(" donation failed")
//           }
//         })
//       })
//     },
  
//     handleMint: function (musicname, Description, artistname, p, percent) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         console.log(account);
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
//           console.log(parseInt(p),parseInt(percent));
    
//           return musicinstance.mintMusicNFT( musicname, Description, artistname,  parseInt(p),  parseInt(percent),{from:account});
//         }).then(function (result, err) {
//           if (result) {
//             console.log(result);
//             const resultElement = document.getElementById("token-id");
//             json_string=JSON.stringify(result)
//             data = JSON.parse(json_string)
//             topics = data['logs'][1]['args']['id']
  
            
//             // token_id = parseInt(topics[2], 16)
  
            
//             // resultElement.innerHTML = `Retrieved value: ${token_id}`;
//             // resultElement.innerHTML = `Retrieved value: ${tokenidNumber}`; 
//             resultElement.innerHTML = `Token: ${JSON.stringify(topics)}`;
  
//           } else {
//             alert("minting failed");
//           }
//         });
//       });
//     } ,
  
//     handleUnlist: function (music_id) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.unlistMusicFromSale( parseInt(music_id),{from:account});
//         }).then(function (result, err) {
//           /*if (result) {
//             console.log(result)
//             if (parseInt(result.receipt.status) == 1)
//               alert("You have successfully donated an Amount of "+ amount + " ETH")
//             else
//               alert(amount + " donation not done successfully due to revert")
//           } else {
//             alert(amount + " donation failed")
//           }*/
//         })
//       })
//     },
//     handlesellrights: function (music_id) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.sellMusicRights( parseInt(music_id),{from:account});
//         }).then(function (result, err) {
//           console.log(music_id)
//           console.log(account)
//           /*if (result) {
//             console.log(result)
//             if (parseInt(result.receipt.status) == 1)
//               alert("You have successfully donated an Amount of "+ amount + " ETH")
//             else
//               alert(amount + " donation not done successfully due to revert")
//           } else {
//             alert(amount + " donation failed")
//           }*/
//         })
//       })
//     }
//     ,
//     handlebuyrights: function (music_id, amount) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.transferether( parseInt(music_id),{from:account, value : parseInt(amount)*1e18});
//         }).then(function (result, err) {
//           /*if (result) {
//             console.log(result)
//             if (parseInt(result.receipt.status) == 1)
//               alert("You have successfully donated an Amount of "+ amount + " ETH")
//             else
//               alert(amount + " donation not done successfully due to revert")
//           } else {
//             alert(amount + " donation failed")
//           }*/
//         })
//       })
//     }
//     ,
//     handlesendprofits: function (music_id, amount) {
//       var musicinstance;
//       web3.eth.getAccounts(function (error, accounts) {
//         var account = accounts[0];
//         App.contracts.music.deployed().then(function (instance) {
//           musicinstance = instance;
          
//           return musicinstance.sendProfits( parseInt(music_id),{from:account, value : parseInt(amount)*1e18});
//         }).then(function (result, err) {
//           /*if (result) {
//             console.log(result)
//             if (parseInt(result.receipt.status) == 1)
//               alert("You have successfully donated an Amount of "+ amount + " ETH")
//             else
//               alert(amount + " donation not done successfully due to revert")
//           } else {
//             alert(amount + " donation failed")
//           }*/
//         })
//       })
//     },

//   abi :  [
//       {
//         "inputs": [
//           {
//             "internalType": "bool",
//             "name": "isFullyOwned",
//             "type": "bool"
//           }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "owner",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "approved",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "Approval",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "owner",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "operator",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "internalType": "bool",
//             "name": "approved",
//             "type": "bool"
//           }
//         ],
//         "name": "ApprovalForAll",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "bidder",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "amount",
//             "type": "uint256"
//           }
//         ],
//         "name": "MusicAlbumBidPlaced",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "artist",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "price",
//             "type": "uint256"
//           }
//         ],
//         "name": "MusicAlbumListed",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "artist",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "indexed": false,
//             "internalType": "string",
//             "name": "description",
//             "type": "string"
//           },
//           {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "price",
//             "type": "uint256"
//           }
//         ],
//         "name": "MusicAlbumMinted",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "buyer",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "amount",
//             "type": "uint256"
//           }
//         ],
//         "name": "MusicAlbumSold",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "artist",
//             "type": "address"
//           }
//         ],
//         "name": "MusicAlbumUnlisted",
//         "type": "event"
//       },
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "from",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "internalType": "address",
//             "name": "to",
//             "type": "address"
//           },
//           {
//             "indexed": true,
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "Transfer",
//         "type": "event"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//           }
//         ],
//         "name": "_artistDetails",
//         "outputs": [
//           {
//             "internalType": "string",
//             "name": "nameArtist",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "appreciationScore",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "name": "_musicAlbums",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "internalType": "address payable",
//             "name": "artist",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "artistName",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "description",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "price",
//             "type": "uint256"
//           },
//           {
//             "internalType": "bool",
//             "name": "forSale",
//             "type": "bool"
//           },
//           {
//             "internalType": "uint256",
//             "name": "percentageOwnershipTransfered",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "to",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "approve",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "owner",
//             "type": "address"
//           }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "getApproved",
//         "outputs": [
//           {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "owner",
//             "type": "address"
//           },
//           {
//             "internalType": "address",
//             "name": "operator",
//             "type": "address"
//           }
//         ],
//         "name": "isApprovedForAll",
//         "outputs": [
//           {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//           {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "ownerOf",
//         "outputs": [
//           {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "from",
//             "type": "address"
//           },
//           {
//             "internalType": "address",
//             "name": "to",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "safeTransferFrom",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "from",
//             "type": "address"
//           },
//           {
//             "internalType": "address",
//             "name": "to",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "bytes",
//             "name": "data",
//             "type": "bytes"
//           }
//         ],
//         "name": "safeTransferFrom",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "operator",
//             "type": "address"
//           },
//           {
//             "internalType": "bool",
//             "name": "approved",
//             "type": "bool"
//           }
//         ],
//         "name": "setApprovalForAll",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "bytes4",
//             "name": "interfaceId",
//             "type": "bytes4"
//           }
//         ],
//         "name": "supportsInterface",
//         "outputs": [
//           {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [
//           {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "tokenURI",
//         "outputs": [
//           {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "from",
//             "type": "address"
//           },
//           {
//             "internalType": "address",
//             "name": "to",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "transferFrom",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "description",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "artistName",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "price",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "percentageOwnershipTransfered",
//             "type": "uint256"
//           }
//         ],
//         "name": "mintMusicNFT",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           }
//         ],
//         "name": "getMusicAlbum",
//         "outputs": [
//           {
//             "components": [
//               {
//                 "internalType": "uint256",
//                 "name": "id",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "address payable",
//                 "name": "artist",
//                 "type": "address"
//               },
//               {
//                 "internalType": "string",
//                 "name": "artistName",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "name",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "price",
//                 "type": "uint256"
//               },
//               {
//                 "internalType": "bool",
//                 "name": "forSale",
//                 "type": "bool"
//               },
//               {
//                 "internalType": "uint256",
//                 "name": "percentageOwnershipTransfered",
//                 "type": "uint256"
//               }
//             ],
//             "internalType": "struct MusicAlbums.MusicAlbum",
//             "name": "",
//             "type": "tuple"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "Price",
//             "type": "uint256"
//           }
//         ],
//         "name": "listMusicForSale",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "id",
//             "type": "uint256"
//           }
//         ],
//         "name": "unlistMusicFromSale",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "amount",
//             "type": "uint256"
//           }
//         ],
//         "name": "BidQuote",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function",
//         "payable": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "sellMusicRights",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "transferether",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function",
//         "payable": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "value",
//             "type": "uint256"
//           }
//         ],
//         "name": "artistStats",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "viewHighestBidder",
//         "outputs": [
//           {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "viewHighestBid",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_tokenId",
//             "type": "uint256"
//           }
//         ],
//         "name": "sendProfits",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function",
//         "payable": true
//       }
//   ]
// };

// $(function () {
//   $(window).load(function () {
//     App.init();
//     toastr.options = {
//       closeButton: true,
//       debug: false,
//       newestOnTop: false,
//       progressBar: false,
//       positionClass: "toast-bottom-full-width",
//       preventDuplicates: false,
//       onclick: null,
//       showDuration: "300",
//       hideDuration: "1000",
//       timeOut: "5000",
//       extendedTimeOut: "1000",
//       showEasing: "swing",
//       hideEasing: "linear",
//       showMethod: "fadeIn",
//       hideMethod: "fadeOut",
//     };
//   });
// });









App = {
  web3Provider: null,
  contracts: {},
  address: "0xBf70Cca89C6dA214149759Cf3d6BdaF4e7FcC583",
  names: new Array(),
  // url: 'http://127.0.0.1:7545',
 
  init: function () {
    console.log("Checkpoint");

    return App.initWeb3();
  },

  initWeb3: function () {
    // Is there is an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fallback to the TestRPC
      // App.web3Provider = new Web3.providers.HttpProvider(App.url);
      console.log("error")
    }
    web3 = new Web3(App.web3Provider);

    ethereum.enable();

    // App.populateAddress();
    return App.initContract();
  },

  initContract: function () {
    $.getJSON('MusicAlbums.JSON', function (data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var Music = data;
      App.contracts.music = TruffleContract(Music);

      // Set the provider for our contract
      App.contracts.music.setProvider(App.web3Provider);

      // App.getChairperson();
      return App.bindEvents();
    });
  },

  bindEvents: function () {
    $(document).on('click', '#list', function () {
      var ad1 = $('#music_id').val();
      var aa1 = $('#min_price').val();
      App.handleList(ad1, aa1);
    });
    $(document).on('click', '#unlist', function () {
      var ad = $('#music_id').val();
      App.handleUnlist(ad);
    });
    $(document).on('click', '#bsubmit', function () {
      var ada = $('#song--id').val();
      var aaa = $('#bidval').val();
      App.handleBid(ada, aaa);
    });
    $(document).on('click', '#highest-bid', function () {
      var ad = $('#music--id').val();
    
      App.handleHbid(ad);
    });
    $(document).on('click', '#mint-btn', function () {
      var artist_name = $('#artist-name').val();
      var music_name =  $('#music-name').val();
      var music_desc =  $('#music-desc').val();
      var m_price =  $('#min-price').val();
      var percent_transfer =  $('#percent').val();
    
      App.handleMint(artist_name,music_name,music_desc,m_price,percent_transfer);
    });
    $(document).on('click', '#highest-bidder', function () {
      var ad = $('#music--id').val();
    
      App.handleHbidder(ad);
    });
    $(document).on('click', '#sell', function () {
      var ad = $('#sell-id').val();
    
      App.handlesellrights(ad);
    });
    $(document).on('click', '#buy', function () {
      var ad = $('#buy-id').val();
      var amount = $('#send').val();
    
      App.handlebuyrights(ad,amount);
    });
    $(document).on('click', '#ssubmit', function () {
      var ad = $('#sid').val();
      var amount = $('#profit').val();
      App.handlesendprofits(ad,amount);
    });
    
    // $(document).on('click', '#recievefunds-btn',function () { var ad = $('#recamount').val(); App.handleReceiveFunds(ad); });
  },


  // populateAddress: function () {
  //   new Web3(new Web3.providers.HttpProvider(App.url)).eth.getAccounts((err, accounts) => {
  //     console.log("in here");
  //     web3.eth.defaultAccount = web3.eth.accounts[0];
  //     console.log(web3.eth.defaultAccount);
  //     jQuery.each(accounts, function (i) {
  //       if (web3.eth.coinbase != accounts[i]) {
  //         // var optionElement = '<option value="' + accounts[i] + '">' + accounts[i] + '</option';
  //         // jQuery('#enter_address').append(optionElement);
  //         console.log(web3.eth.defaultAccount)
  //       }
  //     });
  //   });
  // },

  handleList: function (music_id,min_pric) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.listMusicForSale(parseInt(music_id), parseInt(min_pric),{from:account});
      }).then(function (result, err) {
        /*if (result) {
          console.log(result)
          if (parseInt(result.receipt.status) == 1)
            alert("You have successfully donated an Amount of "+ amount + " ETH")
          else
            alert(amount + " donation not done successfully due to revert")
        } else {
          alert(amount + " donation failed")
        }*/
      })
    })
  },

  handleBid: function (music_id,bid) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      console.log(account);
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.BidQuote( parseInt(music_id) ,parseInt(bid),{from:account});
      }).then(function (result, err) {
        /*if (result) {
          console.log(result)
          if (parseInt(result.receipt.status) == 1)
            alert("You have successfully donated an Amount of "+ amount + " ETH")
          else
            alert(amount + " donation not done successfully due to revert")
        } else {
          alert(amount + " donation failed")



        }*/
      })
    })
  },

  handleHbid: function (music_id) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.viewHighestBid( parseInt(music_id));
      }).then(function (result, err) {
        if (result) {
          console.log(result);
          console.log(result);
          const value =result;
          const resultElement = document.getElementById("h-bid");
          resultElement.innerHTML = `Highest Bid: ${JSON.stringify(result)}`;

        } else {
          alert(" donation failed")
        }
      })
    })
  },

  handleHbidder: function (music_id) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.viewHighestBidder( parseInt(music_id));
      }).then(function (result, err) {
        if (result) {
          console.log(result);
          const value =result;
          const resultElement = document.getElementById("h-bidder");
          resultElement.innerHTML = `Highest Bidder: ${JSON.stringify(result)}`;

        } else {
          // alert(" donation failed")
        }
      })
    })
  },

  handleMint: function (musicname, Description, artistname, p, percent) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      console.log(account);
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        console.log(parseInt(p),parseInt(percent));
  
        return musicinstance.mintMusicNFT( musicname, Description, artistname,  parseInt(p),  parseInt(percent),{from:account});
      }).then(function (result, err) {
        if (result) {
          console.log(result);
          const resultElement = document.getElementById("token-id");
          json_string=JSON.stringify(result)
          data = JSON.parse(json_string)
          topics = data['logs'][1]['args']['id']

          
          // token_id = parseInt(topics[2], 16)

          
          // resultElement.innerHTML = `Retrieved value: ${token_id}`;
          // resultElement.innerHTML = `Retrieved value: ${tokenidNumber}`; 
          resultElement.innerHTML = `Token: ${JSON.stringify(topics)}`;

        } else {
          alert("minting failed");
        }
      });
    });
  } ,

  handleUnlist: function (music_id) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.unlistMusicFromSale( parseInt(music_id),{from:account});
      }).then(function (result, err) {
        /*if (result) {
          console.log(result)
          if (parseInt(result.receipt.status) == 1)
            alert("You have successfully donated an Amount of "+ amount + " ETH")
          else
            alert(amount + " donation not done successfully due to revert")
        } else {
          alert(amount + " donation failed")
        }*/
      })
    })
  },
  handlesellrights: function (music_id) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.sellMusicRights( parseInt(music_id),{from:account});
      }).then(function (result, err) {
        console.log(music_id)
        console.log(account)
        /*if (result) {
          console.log(result)
          if (parseInt(result.receipt.status) == 1)
            alert("You have successfully donated an Amount of "+ amount + " ETH")
          else
            alert(amount + " donation not done successfully due to revert")
        } else {
          alert(amount + " donation failed")
        }*/
      })
    })
  }
  ,
  handlebuyrights: function (music_id, amount) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.transferether( parseInt(music_id),{from:account, value : parseInt(amount)*1e18});
      }).then(function (result, err) {
        /*if (result) {
          console.log(result)
          if (parseInt(result.receipt.status) == 1)
            alert("You have successfully donated an Amount of "+ amount + " ETH")
          else
            alert(amount + " donation not done successfully due to revert")
        } else {
          alert(amount + " donation failed")
        }*/
      })
    })
  }
  ,
  handlesendprofits: function (music_id, amount) {
    var musicinstance;
    web3.eth.getAccounts(function (error, accounts) {
      var account = accounts[0];
      App.contracts.music.deployed().then(function (instance) {
        musicinstance = instance;
        
        return musicinstance.sendProfits( parseInt(music_id),{from:account, value : parseInt(amount)*1e18});
      }).then(function (result, err) {
        /*if (result) {
          console.log(result)
          if (parseInt(result.receipt.status) == 1)
            alert("You have successfully donated an Amount of "+ amount + " ETH")
          else
            alert(amount + " donation not done successfully due to revert")
        } else {
          alert(amount + " donation failed")
        }*/
      })
    })
  }
  
  
 };

$(function () {
  $(window).load(function () {
    App.init();
  });
});
