<script>
    export let cohort
    import Student from './student.svelte'
</script>

<table>
    <tr>
      <th>Name</th>
    </tr>
    {#each cohort.students as student}
        <Student student={student}/>
    {/each}
</table>