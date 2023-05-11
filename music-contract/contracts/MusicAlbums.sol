// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";



contract MusicAlbums is ERC721, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bool private _isFullyOwned;

    
    struct MusicAlbum {
        uint256 id;
        address payable artist;
        string artistName;
        string name;
        string description;
        uint256 price;// minimum price for the album
        bool forSale;
        uint256 percentageOwnershipTransfered;

    }
    struct artistDetails{
        string nameArtist;
        uint256 appreciationScore;
    }
    
    struct bidDetails{
        uint256 highestBid;
        address payable highestBidder;
    }

//Mapping the structs
    mapping(string =>artistDetails) public _artistDetails;
    mapping(uint256 => MusicAlbum) public _musicAlbums;
    mapping(uint256 => bidDetails) private trackBid;
    mapping(address => uint256) private _balances;
//Creating events to acknowledge
    event MusicAlbumMinted(uint256 indexed id, address indexed artist, string name, string description, uint256 price);
    event MusicAlbumListed(uint256 indexed id, address indexed artist, uint256 price);
    event MusicAlbumUnlisted(uint256 indexed id, address indexed artist);
    event MusicAlbumBidPlaced(uint256 indexed id, address indexed bidder, uint256 amount);
    event MusicAlbumSold(uint256 indexed id, address indexed buyer, uint256 amount);
   
//Useful modifiers
    modifier FullyOwned() 
        {
            require(_isFullyOwned, "MusicAlbum rights are not fully transferred");
            _;
        }
    modifier musicAlbumExists(uint256 id) //check valid album
        {
            require(_exists(id), "invalid MusicAlbum id");
            _;   
        }
    modifier ownerIsSender(uint256 id) //authorisation
        {
            require(ownerOf(id) == msg.sender, "MusicAlbum: unauthorised caller, not owner");
            _;
        }
    modifier listedForSaleTrue(uint256 id) //if the requested id is on sale list
        {
            require(_musicAlbums[id].forSale==true, "MusicAlbum not on sale list");
            _;
        }
        

    constructor(bool isFullyOwned) ERC721("MusicAlbums", "MUSIC") 
        {
            _isFullyOwned = isFullyOwned;
        }
//Function to mint the NFTs.
    function mintMusicNFT(string memory name, string memory description, string memory artistName , uint256 price, uint256 percentageOwnershipTransfered) public returns (uint256) {
        _tokenIds.increment();
        uint256 newId = _tokenIds.current();
        _mint(msg.sender, newId);
        _musicAlbums[newId] = MusicAlbum(newId, payable(msg.sender),artistName, name, description, price, false,percentageOwnershipTransfered);
        emit MusicAlbumMinted(newId, msg.sender, name, description, price);
        return newId;
    }
//Function to get the list of music tracks/ albums owned by the artist.
    function getMusicAlbum(uint256 id) public view musicAlbumExists(id) returns (MusicAlbum memory) {
        return _musicAlbums[id];
    }
//Function to place the music album on sale list that the buyers/bidders can view and make apt quotations/offers.
    function listMusicForSale(uint256 id, uint256 Price) public musicAlbumExists(id) ownerIsSender(id) /*listedForSaleTrue(id)*/{
        require(_musicAlbums[id].forSale==false);
        _musicAlbums[id].forSale = true;
        _musicAlbums[id].price = Price;
        emit MusicAlbumListed(id, _musicAlbums[id].artist, _musicAlbums[id].price);
    }
//Function to take off the music album from the rights as per the artist's interest.
    function unlistMusicFromSale(uint256 id) public musicAlbumExists(id) ownerIsSender(id) /*listedForSaleTrue(id)*/{
        require(_musicAlbums[id].forSale!=false);
        _musicAlbums[id].forSale = false;
        emit MusicAlbumUnlisted(id, _musicAlbums[id].artist);
    }
//Function to track the bidders and get the details of the bidder with highest quote
    function BidQuote(uint256 _tokenId, uint256 amount) public payable nonReentrant musicAlbumExists(_tokenId) listedForSaleTrue(_tokenId)
    {
  
        require(amount >=_musicAlbums[_tokenId].price, "Your Bid must be greater than minimum price");

    
        require(amount > trackBid[_tokenId].highestBid, "Please place a higher quote");
        trackBid[_tokenId].highestBid = amount;
        trackBid[_tokenId].highestBidder = payable(msg.sender);
        //_balances[msg.sender] += msg.value;
        emit MusicAlbumBidPlaced(_tokenId,   trackBid[_tokenId].highestBidder,trackBid[_tokenId].highestBid);
    }
//Function to sell the music rights t the buyer with highest bid.
    function sellMusicRights(uint256 _tokenId) public nonReentrant ownerIsSender(_tokenId) listedForSaleTrue(_tokenId)
    {
        MusicAlbum memory musicAlbum = _musicAlbums[_tokenId];
        address payable highestB= trackBid[_tokenId].highestBidder;
        uint256 highestBid = trackBid[_tokenId].highestBid;
        require(highestB != address(0), "Album unsold");
        require(highestBid >= musicAlbum.price, "Bid quote didn't meet the minimum bid");
        if(highestBid>50)
        {
        artistStats(_tokenId,5);
        }
        if(highestBid<50)
        {
            artistStats(_tokenId,5);
        }
        _safeTransfer(msg.sender, highestB, _tokenId, "");
        _musicAlbums[_tokenId].forSale = true; // Taking it off the sale list after selling it.
        _musicAlbums[_tokenId].price = 0;
        emit MusicAlbumSold(_tokenId, highestB, highestBid);
    }
    function transferether(uint256 _tokenId) public payable
    {
        require(msg.sender==trackBid[_tokenId].highestBidder,"the sender is not highest bidder");
        require(msg.value >= trackBid[_tokenId].highestBid,"the amount is not the highest bid");
         address payable k =  _musicAlbums[_tokenId].artist;
         k.transfer(msg.value);
        _musicAlbums[_tokenId].forSale = false;
    } 
    function artistStats(uint256 _tokenId, uint256 value) public 
     {
        MusicAlbum memory musicAlbum = _musicAlbums[_tokenId];
        string memory temp = musicAlbum.artistName;
        
            _artistDetails[temp].appreciationScore=value;
            _artistDetails[temp].nameArtist=temp;
        

    }

    function viewHighestBidder(uint256 _tokenId) public view  returns (address) {
        return trackBid[_tokenId].highestBidder;
    }
    function viewHighestBid(uint256 _tokenId) public view  returns (uint256) {
        return trackBid[_tokenId].highestBid;
    }

//Profit amount is calculated at the buyer end and he transfers the agreed amount to the artist.
    function sendProfits(uint256 _tokenId ) public payable {
        MusicAlbum memory owner= _musicAlbums[_tokenId];
        require(owner.percentageOwnershipTransfered<100,"There is no need to tranfer profits.");
        (owner.artist).transfer(msg.value);
}
}