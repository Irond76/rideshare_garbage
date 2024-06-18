<div class="header">
    <div>
        <h1>Share Your offer</h1>
    </div>
    <div>
        <form >
            <label for="city">City: </label>
            <input type="text" name="city" id="city" placeholder="e.g Boston">
            <br>
            <label for="state"> State: </label>
            <input type="text" name="state" id="state" placeholder="e.g Massachusetts">
            <br>
            <label for="country">Country: </label>
            <input type="text" name="country" placeholder="USA">
            <br> 
            <label for="image">Photo:</label>
            <input type="file" name="image" accept=".png, .jpg, .jpeg">
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>



<style>
    .header {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        width: 90dvw;
        height: 100dvh;
        margin: auto;
        text-align: center;
    }
    form {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        width: 80dvw;
        padding: 1em;
        background-color: rgb(55, 55, 55);
    }
    input {
        margin: 0 auto .5em auto;
        width: 70dvw;

    }
    button {
        margin: 0 auto;
    }
</style>