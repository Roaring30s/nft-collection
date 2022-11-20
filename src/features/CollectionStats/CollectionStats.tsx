import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { device } from '@core/devices';
import { Socials } from '@components/Divs/Socials';
import { CollectionHeader } from '@components/Divs';
import { StatsContainer } from '@components/Divs/Stats';
import { Error } from "@components/Buttons/Error";
import { selectCollectionStats, loadCollectionStats } from './collectionStatsSlice';
import { AppDispatch, RootState } from 'src/store';
import { formatWalletId, formatDecimals } from '@utils/Metamask';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import twitterLogo from "@assets/images/twitterLogo.svg";
import discordLogo from "@assets/images/discord.svg";
import wwwLogo from "@assets/images/wwwIcon.svg";


/**
 * Collection
 * Category: Personalized Module
 * Purpose:
 *   a. Container to Collection Stats
 * 
 * To Work:
 *   a. Apply within CollectionStatsContainer to be rendered on parent component
 */
const CollectionBox = styled.div`
  display: flex;
  align-items: center;
  border: none; 
  background-color: rgba(255,255,255, 0.4);
  align-self: center;
  font-size: 40px;

  @media ${device.mobile} {
    width: 95%;
    height: 150px;
    margin: 2% 0;
    border-radius: 15px;
    box-shadow: 30px 30px 85px hsl(0deg 0% 90%), 
    inset -2px -1px 16px hsl(120deg 5% 50% / 70%), 
    inset 0px 14px 28px hsl(120deg 20% 95%);
  }
  @media ${device.mobileL} {
    width: 95%;
    height: 200px;
    margin: 2% 0;
    border-radius: 15px;
    box-shadow: 30px 30px 85px hsl(0deg 0% 90%), 
    inset -8px -8px 16px hsl(120deg 5% 50% / 70%), 
    inset 0px 14px 28px hsl(120deg 20% 95%);
  }
  @media ${device.laptopS} {
    width: 300px;
    height: 90%;
    margin: 0;
    flex-direction: column;
    border-radius: 20px 0 0 20px;
    box-shadow: 20px 20px 120px hsl(0deg 0% 50%), 
    inset -1px -4px 14px hsl(120deg 5% 50% / 70%), 
    inset -1px 10px 28px hsl(120deg 20% 95%);
  }
  @media ${device.laptop} {
    width: 400px;
    height: 90%;
    margin: 0;
    flex-direction: column;
    border-radius: 20px 0 0 20px;
  }
`;

/**
 * Collection Stats Container
 * Category: Personalized Module
 * Purpose:
 *   a. Hold all collection related stats
 * 
 * To Work:
 *   a. Apply on Dashboard component
 * 
 * @returns Component containing collection stats
 */
export const CollectionStatsContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(loadCollectionStats());
    }, [dispatch]);

    const { isLoading, hasError } = useSelector((state: RootState) => state.collectionStats);
    const stats = useSelector(selectCollectionStats);
    const onTryAgainHandler = () => {
      dispatch(loadCollectionStats());
    };

    if(isLoading) {
      return (
        <CollectionBox>
          <Box sx={{ display: 'flex', margin: 'auto' }}>
            <CircularProgress />
          </Box>
        </CollectionBox>
      );
    } else if(hasError) {
      return (
        <CollectionBox>
          <Error 
            onClick={onTryAgainHandler}
            overlap='relative'
          />
        </CollectionBox>
      );
    } else {
      return (
        <CollectionBox>
          {!isLoading && stats && (
            <React.Fragment>
              <CollectionHeader
                  pfp={stats.pfpUrl}
                  name={stats.name}
                  contractAddress={formatWalletId(stats.address)}
              />
              <StatsContainer
                volAmount={formatDecimals(18, stats.volume)}
                ownersAmount={String(stats.numOwners)}
                floorPrice={formatDecimals(18, stats.floor)}
                itemsAmount={String(stats.numItems)}
              />
              <Socials 
                  twitterSrc={twitterLogo}
                  twitterLink={stats.twitterUrl}
                  discordSrc={discordLogo}
                  discordLink={stats.discordUrl}
                  wwwSrc={wwwLogo}
                  wwwLink={stats.websiteUrl}
              />
            </React.Fragment>
          )}
        </CollectionBox>
      );
    }
}