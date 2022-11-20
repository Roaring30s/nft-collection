/**
 * Formatting wallet to omit majority of string
 * @param {string} walletId - Wallet address
 * @returns {string} - containing shortened wallet address
 */
export const formatWalletId = (walletId: string | undefined) => {
    // check we have at least 11 chars, otherwise there's no need to shorten
    if(walletId) {
      if (walletId.length <= 11) {
        return walletId;
      }
      const start = walletId.substring(0, 6);
      const end = walletId.substring(walletId.length - 4);
      return `${start}...${end}`;
    } else {
      return '...';
    }

};