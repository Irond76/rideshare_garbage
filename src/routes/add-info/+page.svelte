

<script>
let input;
let image;




async function onChange() {
    const file =  await input.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            image.setAttribute("src", reader.result);
        });
        reader.readAsDataURL(file);
       
			

      return;
    } 
}


function base64ToDataUrl(base64) {
        return `data:image/jpeg;base64,${base64}`;
    }
</script>

<div class="header">
    <div>
        <h1>Share Your offer</h1>
    </div>
    <div>
        <form method="POST" enctype="multipart/form-data">
            <label for="city">City: </label>
            <input type="text" name="city" id="city" placeholder="e.g Boston" >
            <br>
            <label for="state"> State: </label>
            <input type="text" name="state" id="state" placeholder="e.g Massachusetts">
            <br>
            <label for="country">Country: </label>
            <input type="text" name="country" placeholder="USA" value="USA">
            <br> 
            <label for="image">Photo:</label>
            <input type="file" name="image" accept=".png, .jpg, .jpeg" on:change={onChange} bind:this={input} value="">
            <br>
            <button type="submit" >Submit</button>
            <div class="image-preview">
                <img bind:this={image} alt="offer" width="150" height="150">
            </div>
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
    .image-preview {
        width: 150px;
        height: 150px;
        border: 1px solid white;
        margin: .5em auto 0 auto;
    }
</style>