<style>
    img{
        position: relative;
        width: 100%;
        
    }
    .menu{
        position: fixed;
        bottom: 0;
    }
</style>    

<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Начать работу
</button>

{#if count > 0}
<img src="/Outfits.png"  alt="Пример окна" />
<p> Меню </p>
<img class="menu" src="/menu.png" alt="Меню" />
{/if}