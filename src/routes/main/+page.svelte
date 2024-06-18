<script>
    export let data;
    function base64ToDataUrl(base64) {
        return `data:image/jpeg;base64,${base64}`;
    }
</script>






<div class="header">
    <h2>Share Your Offers</h2>
    <a href="/add-info">
        Add +
    </a>
</div>

{#each data.myData as offer}
            <div class="image-preview">
                <img src={base64ToDataUrl(offer.image)} alt="offer" width="150" height="150">
                <p>{offer.city}, {offer.state}, {offer.country}</p>
            </div>
        {/each}


<style>
     .header {
        display: grid;
        grid-template-rows: 1fr;
        width: 90dvw;
        margin: auto;
        text-align: center;
    }
     a {
        background: rgb(254, 73, 73);
        cursor: pointer;
        margin: 0 auto;
        width: max-content;
        text-decoration: none;
        color: #fff;
        padding: .5em;
    }
    a:hover {
        color: rgb(250, 202, 202);
    }
</style>