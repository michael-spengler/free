<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    let connectedWallet;
    let chainId;
    let accounts;

    const dispatch = createEventDispatcher();

    onMount(async () => {
        if (typeof window.ethereum === "undefined") {
            alert(
                "You need a browserwallet like https://metamask.io to interact with this dApp."
            );
        } else {
            console.log("You are ready to rock");
            accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            connectedWallet = accounts[0].toLowerCase();

            chainId = await window.ethereum.request({
                method: "eth_chainId",
            });
            dispatch("walletConnected", {
                publicWalletAddress: connectedWallet,
                chainId: chainId,
            });

        }
    });
</script>
