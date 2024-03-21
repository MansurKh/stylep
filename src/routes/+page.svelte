<style>
    img{
        position: relative;
        width: 100%;
        
    }
    .menu{
        position: fixed;
        bottom: 0;
    }
    .container {
        height: 300px;
        position: relative;
    }
    .vertical-center {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>    

<script>
    let count = 0;

    function increment() {
        count += 1;
    }
</script>

{#if count == 0}
<div class="container">
    <div class="vertical-center">
        <button on:click={increment}>
            Начать работу
        </button>
    </div>
  </div>

{/if}

{#if count > 0}
<img src="/Outfits.png"  alt="Пример окна" />
<p> Меню </p>
<img class="menu" src="/menu.png" alt="Меню" />
{/if}