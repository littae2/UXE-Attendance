<script>
  import Cohorts from '../assets/timetable.json'
  let today = new Date()
  let month = today.getMonth()
  var cohortArr

  if (month < 6) {
    cohortArr = Cohorts.semester.one.cohort
  } else {
    cohortArr = Cohorts.semester.two.cohort
  } 
  var selCohort
  var selStream
</script>

<div id ="cohort-select">
  <label for="cohort"
    >Cohort:
    <select name="cohort" id="cohort" bind:value={selCohort}>
      {#each cohortArr as cohort}
        <option value={cohort.name}>{cohort.name}</option>
      {/each}
    </select></label>
  {#each cohortArr as cohort}
    {#if cohort.name == selCohort}
      <label for="stream"
        >Stream: <select name="stream" id="stream"  bind:value={selStream}>
          {#each cohort.stream as stream}
            <option value={stream}>{stream}</option>
          {/each}
        </select></label>
    {/if}
  {/each}
</div>

