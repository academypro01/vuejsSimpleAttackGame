<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-center align-items-center">

                <div class="border flex-fill p-4 my-2">
                    <h5 class="text-center text-secondary">Human Helth</h5>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="{width: humanHelth+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{humanHelth}}%</div>
                    </div>
                </div>

                <div class="border flex-fill p-4 my-2">
                    <h5 class="text-center text-secondary">Monster Helth</h5>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" :style="{width: monsterHelth+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{monsterHelth}}%</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressComponent",
    props: ['humanHelth', 'monsterHelth']
}
</script>