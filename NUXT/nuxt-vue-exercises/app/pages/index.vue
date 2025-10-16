<template>
  <div>
    <h1>Bienvenido a la página de inicio</h1>
    <!--<TheTitle propTitle="Titulo" /> Con props-->
    <TheTitle>
      <TheCounter></TheCounter>
    </TheTitle>

    <NuxtLink class="button" to="/catalogo">Ir a la página Catalogo</NuxtLink>

    <ParentComponent class="p"/>
  </div>
</template>
