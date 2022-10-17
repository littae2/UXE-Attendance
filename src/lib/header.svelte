<script>
  import ThemeSelect from '$lib/theme-select.svelte'
  let today = new Date();
  let month = today.getMonth();
  var semester;
  if(month<6){
    semester= "Semester One";
  }
  else{
    semester="Semester Two";
  }
</script>

<div class="bg-primary" id="header-div">
  <h1>{today.toDateString()}</h1>
  <h1 id ="semester">{semester}</h1>
  <ThemeSelect />
</div>
