import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
  mobileM: `(min-width: ${size.mobileM})`
};

const MainContainer = styled.div`
  display:flex;
  width: 100vw;
  flex-direction: column;
  @media ${device.mobileM} { 
    display:flex;
    flex-direction: row;
    width: 100vw;
  };
  background-color: #0a1428;
`

const SideMenu = styled.div`
  @media ${device.mobileM} { 
    width: 20vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: none;
  };
  width: 100vw;
  height: 10vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`

const IconView = styled.div`
  width: 80%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
  @media ${device.mobileM} {
    width: 80%;
    height: 15%;
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    margin: 6px 0;
  };
`

const Icon = styled.img`
`;

const ScreenName = styled.text`
  font-size: 12px;
  color: rgb(143, 152, 165);
  font-weight: 500;
  @media ${device.mobileM} {
    margin-left: 12px;
  };
`

const ScreensView = styled.div`
  @media ${device.mobileM} { 
    width: 70%;
    height: 25vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  };
  width: 100vw;
  height: 20vh;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`

const MusicCover = styled.img`
  width: 16vw;
  height: 13vw;
  border-radius: 100px;
  @media ${device.mobileM} { 
    width: 15vw;
    height: 30vh;
    margin: 30px 0 5px 0;
  };
`

const MusicDetail = styled.div`
  width: 70%;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0;
`

const MusicDetaildiv = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0;
  padding: 0 200px;
  @media ${device.mobileM} { 
    padding: 0 200px;
  };
`

const MusicName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%
`

const MusicTitle = styled.text`
  color: rgb(143, 152, 165);
  font-size: 16px;
`

const Music = styled.text`
  color: rgb(143, 152, 165);
  font-size: 13px;
`

const HeartIcon = styled.img`
  width: 18px;
  height: 18px;
`

const MusicProgress = styled.img`
  @media ${device.mobileM} { 
    width: 15vw;
    height: 25px;
  };
  width: 100vw;
  height: 34px;
`

const MusicButtons = styled.img`
 width: 35vw;
 height: 28px;
 @media ${device.mobileM} { 
  width: 15vw;
  height: 43px;
 };
`

const MainDiv = styled.div`
  width: 100vw;
  @media ${device.mobileM} { 
    width: 80vw;
   };
`

const CoverDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SearchView = styled.div`
  background-color: gray;
  height: 10vh;
  border-radius: 2px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 60px;
  background-color: #1e2835;
`

const SearchInput = styled.input`
  align-self: center;
  width: 75%;
  height: 40%;
  margin: 0 10px;
  background-color: #1e2835;
  border: none;
  color: #EDEADE;
`

const BackIcon = styled.img`
  width: 24px;
  height: 22px
`

const SearchIcon = styled.img`
  width: 24px;
  height: 22px;
  margin: 0 5px
`

const NotificationIcon = styled.img`
  width: 24px;
  height: 22px;
  margin: 0 5px;
`

//Leader

const LeaderMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`

const FeaturedButton = styled.button`
  background-color: rgb(233, 105, 110);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 4px;
  align-self: flex-start;
  border-radius: 4px;
  font-size: 8px;
  font-weight: 500;
  margin: 15px 0;
  border: none;
`

const LeaderHeadline = styled.text`
  color: rgb(143, 152, 165);
  font-size: 12px;
  overflow: hidden;
  margin-bottom: 10px
`

const LeaderCover = styled.img`
  width: 230px;
  height: 100px;
  margin-left: 8px;
  border-radius: 3px
`

const LeaderDiv = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`

//Categories

const CategoryMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 30px 30px;
`

const CategoryHeadline = styled.text`
  color: rgb(143, 152, 165);
  font-size: 13px;
  overflow: hidden;
  margin-bottom: 10px
`

const CategoryCover = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50px
`

const CategoryDiv = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: row
`

const CategoryName = styled.text`
  font-size: 8px;
  color: white;
  margin-top: 6px;
  color: rgb(143, 152, 165)
`

const CategoryDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 38px;
`

//Trending Styles.
const TrendingMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`

const TrendingHeadline = styled.text`
  color: rgb(143, 152, 165);
  font-size: 12px;
  overflow: hidden;
  margin-bottom: 10px
`

const TrendingCover = styled.img`
  width: 60px;
  height: 70px;
  border-radius: 2px
`

const TrendingDiv = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: row
`

const TrendingDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 16px;
`

const TrendingName = styled.text`
  font-size: 9px;
  color: white;
  margin-top: 6px;
  color: rgb(143, 152, 165)
`

//Fiction Styles.
const FictionMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin-top: 40px;
`

const FictionHeadline = styled.text`
  color: rgb(143, 152, 165);
  font-size: 12px;
  overflow: hidden;
  margin-bottom: 10px
`

const FictionCover = styled.img`
  width: 60px;
  height: 70px;
  border-radius: 2px
`

const FictionDiv = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: row
`

const FictionDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 16px;
`

const FictionName = styled.text`
  font-size: 9px;
  color: white;
  margin-top: 6px;
  color: rgb(143, 152, 165)
`

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search here
    console.log(searchTerm);
  };

  return (
    <SearchView>
      <BackIcon src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpoOk7ODUZfj3IuMApouJ-MICu9rdBl8o2xTdvCc&s"} />
      <SearchInput />
      <SearchIcon src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRdvhw8Uq11FuU3rGI48BiNrrZIIdPCr0kCNmIhzm1TfUNt6Dvln0GhDmwqksJk8BSlc&usqp=CAU"} />
      <NotificationIcon src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9P4yPHTvpZnywuj-gDrb7W9jKuyJQNvYxQ&usqp=CAU"} />
    </SearchView>
  );
}

function BetterLeader() {
  const leaderData = [
    {
      "id": 1,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    },
    {
      "id": 2,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDeGvEGN0HNQZJp7RKI888fvx6ujW2oVVmA&usqp=CAU"
    },
    {
      "id": 3,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJb4UOteNUMZU5W_NDmrr7mjj23K6YhXtDA&usqp=CAU"
    },
    {
      "id": 4,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYI7G0a7Z_WAllrdCYkUPIJIBhf1C18tyFw&usqp=CAU"
    },
    {
      "id": 5,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvP7Mu_Exb1JhwATKpRi2LAljFvTcqSN9_CQ&usqp=CAU"
    },
    {
      "id": 6,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    },
    {
      "id": 7,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    },
    {
      "id": 8,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    },
    {
      "id": 4,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYI7G0a7Z_WAllrdCYkUPIJIBhf1C18tyFw&usqp=CAU"
    },
    {
      "id": 5,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvP7Mu_Exb1JhwATKpRi2LAljFvTcqSN9_CQ&usqp=CAU"
    },
    {
      "id": 6,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    },
    {
      "id": 7,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    },
    {
      "id": 8,
      "leader_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU"
    }
  ]
  return (
    <LeaderMainDiv>
      <FeaturedButton>
        FEATURED SHOWS
      </FeaturedButton>
      <LeaderHeadline>
        How to become better leader.
      </LeaderHeadline>
      <LeaderDiv>
        {
          leaderData.map((item) => (
            <LeaderCover src={item.leader_cover} />
          ))
        }
      </LeaderDiv>
    </LeaderMainDiv>
  );
}

function Categories() {
  const categoryData = [
    {
      "id": 1,
      "category_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU",
      "name": "HEALTH"
    },
    {
      "id": 2,
      "category_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDeGvEGN0HNQZJp7RKI888fvx6ujW2oVVmA&usqp=CAU",
      "name": "ED-TECH"
    },
    {
      "id": 3,
      "category_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJb4UOteNUMZU5W_NDmrr7mjj23K6YhXtDA&usqp=CAU",
      "name": "KIDS"
    },
    {
      "id": 4,
      "category_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYI7G0a7Z_WAllrdCYkUPIJIBhf1C18tyFw&usqp=CAU",
      "name": "COMEDY"
    },
    {
      "id": 5,
      "category_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvP7Mu_Exb1JhwATKpRi2LAljFvTcqSN9_CQ&usqp=CAU",
      "name": "MUSIC"
    },
    {
      "id": 6,
      "category_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BZgSQ8hQ_rR3cc99NPoTFJOesfP8tq1KEyEmU5-LgNQWicCyv4gKw5sxjVsZeaVcTTI&usqp=CAU",
      "name": "STORIES"
    }
  ]
  return (
    <CategoryMainDiv>
      <CategoryHeadline>
        Categories
      </CategoryHeadline>
      <CategoryDiv>
        {
          categoryData.map((item) => (
            <CategoryDetail>
              <CategoryCover src={item.category_cover} />
              <CategoryName>
                {item.name}
              </CategoryName>
            </CategoryDetail>
          ))
        }
      </CategoryDiv>
    </CategoryMainDiv>
  );
}

function Trending() {
  const trendingData = [
    {
      "id": 1,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXO86lT09rnj9Gdr79_tVVslTBS9lYFTe4A&usqp=CAU",
      "name": "Story Seeds"
    },
    {
      "id": 2,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LU5eraiqUSmH-hPHYqH364vkuxIJzuglLw&usqp=CAU",
      "name": "Journey with..."
    },
    {
      "id": 3,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYbYvTLKYjHi8Rdy_WLyZAAqrB7ufnFG6HA&usqp=CAU",
      "name": "Small Beautiful"
    },
    {
      "id": 4,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEghPaRxtAoKKD_gR2I3370B10m9KrcCCH-Q&usqp=CAU",
      "name": "Dare to Lead"
    },
    {
      "id": 5,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvP7Mu_Exb1JhwATKpRi2LAljFvTcqSN9_CQ&usqp=CAU",
      "name": "How to start"
    },
    {
      "id": 6,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotXBoxetecCWtl-46xXuKRT1naHxuFuvm3Q&usqp=CAU",
      "name": "Behind the mask"
    },
    {
      "id": 7,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUIlTBAsKjwUrAsN5LAxnfaK4J7zdALtDPA&usqp=CAU",
      "name": "Life - unfiltered"
    },
    {
      "id": 8,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCCIfQzINPm2EFFDN46JrGjJqTHn6BYtavw&usqp=CAU",
      "name": "Dare to Lead"
    },
    {
      "id": 9,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fqnYzX5bm2-UK9wqojgvzpmYPa2t4PE1GB0d_NUtIfJvMNZEYIQpceQpUeOId85kJB8&usqp=CAU",
      "name": "How to start"
    },
    {
      "id": 10,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJai5dm8Q2msgrsDcIM2PF6nyYvX2ijXqCTg&usqp=CAU",
      "name": "Behind the mask"
    },
    {
      "id": 11,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrs1PNI9WsIh8dMSO8oEWsG-C10Vv_WzbETg&usqp=CAU",
      "name": "Life - unfiltered"
    },
    {
      "id": 12,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVhdO_V48Aku4Z9y8QxQXR6QzJsCNNh6OAA&usqp=CAU",
      "name": "How to start"
    },
    {
      "id": 13,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-t6nGP59kpaPTbYdRTgpeX280MaatS2xjWw&usqp=CAU",
      "name": "Behind the mask"
    },
    {
      "id": 14,
      "trending_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-I_t7oRcZC0W1VZ6gOvm9KuuKDJtiYBhoA&usqp=CAU",
      "name": "Life - unfiltered"
    }
  ]
  return (
    <TrendingMainDiv>
      <TrendingHeadline>
        Trending
      </TrendingHeadline>
      <TrendingDiv>
        {
          trendingData.map((item) => (
            <TrendingDetail>
              <TrendingCover src={item.trending_cover} />
              <TrendingName>
                {item.name}
              </TrendingName>
            </TrendingDetail>
          ))
        }
      </TrendingDiv>
    </TrendingMainDiv>
  );
}

function Fiction() {
  const fictionData = [
    {
      "id": 1,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP9lrn5nh3xI63vqrtSbVlBa5P7hrHQOBLA&usqp=CAU",
      "name": "Alice isn't dead"
    },
    {
      "id": 2,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5-dQ42gJgVKz57HUt-UJPf0HeHCAGQqNMA&usqp=CAU",
      "name": "The Penumbra"
    },
    {
      "id": 3,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rz92LRrSf-FjsipyqB9zlZ3sWmh0-PZtew&usqp=CAU",
      "name": "Dreamboy"
    },
    {
      "id": 4,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwL3bIwTlijHvxJ7q3YSHUaG5uXY2xsydQg&usqp=CAU",
      "name": "Stupid no mor"
    },
    {
      "id": 5,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocyLSCWpKl8K1I7CnTRwexWn2iCHn-I3PuA&usqp=CAU",
      "name": "Tumanbay"
    },
    {
      "id": 6,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeSUzGMNDz_8mZfkZ_80nvduFTzrG5MWro_RGjJ4GxnxqOlzssl2kppttDrBNKypgvFU&usqp=CAU",
      "name": "The Godshead ..."
    },
    {
      "id": 7,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKZVybm5epdyPXtXVbYyH3ZGY1sXnhQdVklNOtrCQLUKQDirpKQZ7ceqYH9ZOQhEy37M&usqp=CAU",
      "name": "Blood Ties"
    },
    {
      "id": 8,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB3vhzaIP6ST1EhByiSZL9Gd0VisOv-uNFg&usqp=CAU",
      "name": "The Walk"
    },
    {
      "id": 9,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpH0IRyRUMGWBY6NzE9MX_eM9r9hRnI9vsQ&usqp=CAU",
      "name": "Wolverine"
    },
    {
      "id": 10,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbt3RDmdLnBN1hBekY8xst22T4vD4lxatWA&usqp=CAU",
      "name": "The Black Tape"
    },
    {
      "id": 11,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwWXq6HwAa1fCezsvHvspLOmjIUXKG62AaA&usqp=CAU",
      "name": "Life - unfiltered"
    },
    {
      "id": 12,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwnIjl4uD0dWLIKG0YLSRsNqT7HsduTPiGn12lj8T02XI7mnudG-t95XFFE1DrfVMahs&usqp=CAU",
      "name": "How to start"
    },
    {
      "id": 13,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfyGCp5SAXuYlc2Yw1pRTCkAZoXbLraN5Gw&usqp=CAU",
      "name": "Behind the mask"
    },
    {
      "id": 14,
      "fiction_cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt6Byiiqc5IC3OZ2gAFcoGj37NAV8cbKKLw&usqp=CAU",
      "name": "Life - unfiltered"
    }

  ]
  return (
    <FictionMainDiv>
      <FictionHeadline>
        Fantastic Fiction
      </FictionHeadline>
      <FictionDiv>
        {
          fictionData.map((item) => (
            <FictionDetail>
              <FictionCover src={item.fiction_cover} />
              <FictionName>
                {item.name}
              </FictionName>
            </FictionDetail>
          ))
        }
      </FictionDiv>
    </FictionMainDiv>
  );
}


//App
function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    width < 375 ?
      <MainContainer>
        {/* <div style={{color: 'white'}}>{`Window width = ${width}`}</div>
        <div style={{color: 'white'}}>{`Window height = ${height}`}</div> */}
        <MainDiv>
          <SearchBar />
          <BetterLeader />
          <Categories />
          <Trending />
          <Fiction />
        </MainDiv>
        <SideMenu>
          <MusicProgress src=" https://the-coder.s3.ap-south-1.amazonaws.com/images/music-progress.png" />
          <MusicDetaildiv>
            <CoverDiv>
              <MusicCover src={"https://rukminim1.flixcart.com/image/416/416/l02r1jk0/poster/7/g/p/medium-album-cover-imagine-dragons-evolve-music-matte-finish-original-imagbxucpvgxk4fz.jpeg?q=70"} />
              <MusicName>
                <MusicTitle>
                  Believer
                </MusicTitle>
                <Music>
                  Image Dragons
                </Music>
              </MusicName>
            </CoverDiv>
            <CoverDiv>
              <MusicButtons src=" https://the-coder.s3.ap-south-1.amazonaws.com/music-buttons.png" />
              <HeartIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-9DBwvu0xaAUy8iqro2PeVqr7pupKmUEECeS95lKn0l16UKyVMTgdIiNZNy6vVcCEcI&usqp=CAU" />
            </CoverDiv>
          </MusicDetaildiv>
          <ScreensView>
            <IconView>
              <Icon style={{ width: 17, height: 18 }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwcnzPicmGBgg90rpqE1sI7gYs1blq2-yxQ&usqp=CAU"} />
              <ScreenName>
                Home
              </ScreenName>
            </IconView>
            <IconView>
              <Icon style={{ width: 17, height: 18 }} src={"data:image/png;base64,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"} />
              <ScreenName>
                Podcast
              </ScreenName>
            </IconView>
            <IconView>
              <Icon style={{ width: 17, height: 22 }} src={"data:image/png;base64,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"} />
              <ScreenName>
                Search
              </ScreenName>
            </IconView>
            <IconView>
              <Icon style={{ width: 19, height: 20 }} src={"data:image/png;base64,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"} />
              <ScreenName>
                Library
              </ScreenName>
            </IconView>
          </ScreensView>
        </SideMenu>
      </MainContainer>
      :
      <MainContainer>
        {/* <div style={{color: 'white'}}>{`Window width = ${width}`}</div>
        <div style={{color: 'white'}}>{`Window height = ${height}`}</div> */}
        <SideMenu>
          <ScreensView>
            <IconView>
              <Icon style={{ width: 17, height: 18 }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwcnzPicmGBgg90rpqE1sI7gYs1blq2-yxQ&usqp=CAU"} />
              <ScreenName>
                Home
              </ScreenName>
            </IconView>
            <IconView>
              <Icon style={{ width: 17, height: 18 }} src={"data:image/png;base64,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"} />
              <ScreenName>
                Podcast
              </ScreenName>
            </IconView>
            <IconView>
              <Icon style={{ width: 17, height: 22 }} src={"data:image/png;base64,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"} />
              <ScreenName>
                Search
              </ScreenName>
            </IconView>
            <IconView>
              <Icon style={{ width: 19, height: 20 }} src={"data:image/png;base64,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"} />
              <ScreenName>
                Library
              </ScreenName>
            </IconView>
          </ScreensView>
          <MusicCover src={"https://rukminim1.flixcart.com/image/416/416/l02r1jk0/poster/7/g/p/medium-album-cover-imagine-dragons-evolve-music-matte-finish-original-imagbxucpvgxk4fz.jpeg?q=70"} />
          <MusicDetail>
            <MusicName>
              <MusicTitle>
                Believer
              </MusicTitle>
              <Music>
                Image Dragons
              </Music>
            </MusicName>
            <HeartIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-9DBwvu0xaAUy8iqro2PeVqr7pupKmUEECeS95lKn0l16UKyVMTgdIiNZNy6vVcCEcI&usqp=CAU" />
          </MusicDetail>
          <MusicProgress src=" https://the-coder.s3.ap-south-1.amazonaws.com/images/music-progress.png" />
          <MusicButtons src=" https://the-coder.s3.ap-south-1.amazonaws.com/music-buttons.png" />
        </SideMenu>
        <MainDiv>
          <SearchBar />
          <BetterLeader />
          <Categories />
          <Trending />
          <Fiction />
        </MainDiv>
      </MainContainer>
  )
}

// render(<App />, document.querySelector('#app'))
export default App;