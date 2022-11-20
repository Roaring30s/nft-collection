import { useEffect } from 'react';
import { NftCard } from '@components/NftCard/Card';
import { GalleryContainer } from '@components/Divs'; 
import { CollectionStatsContainer } from '@features/CollectionStats';
import { DashboardContainer } from '@components/Divs/DashboardContainer';
import { loadItems, selectItems } from './dashboardSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from 'src/store';
import { formatDecimals } from '@utils/Metamask';
import { Error } from '@components/Buttons/Error';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

/**
 * Dashboard
 * Category: Personalized Module
 * Purpose:
 *   a. Holds all frontend data
 * 
 * To Work:
 *   a. Apply to App.tsx
 * 
 * @returns Component containing NFT Gallery and collection stats
 */
export const Dashboard = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(loadItems());
    }, [dispatch]);

    const { isLoading, hasError } = useSelector((state: RootState) => state.items);
    const items = useSelector(selectItems);

    const onTryAgainHandler = () => {
      dispatch(loadItems());
    };

    return (
        <DashboardContainer>
            <CollectionStatsContainer />
            <GalleryContainer>
            {isLoading && (
                <Box sx={{ display: 'flex', margin: 'auto', position: 'absolute' }}>
                    <CircularProgress />
                </Box>
            )}
            {hasError && (
                <Error 
                    onClick={onTryAgainHandler} 
                    overlap='absolute'
                />
            )}
            {!isLoading && !hasError && items.length > 0 && (
                items.map((item) => (
                <NftCard
                    src={item.metadata.image}
                    title={item.metadata.name}
                    rarity={"#"+String(item.rarityRanking)}
                    price={formatDecimals(18, Number(item.currentAsk.price))}
                />
            )))}
            </GalleryContainer>
        </DashboardContainer>
    );
}
