<template>
    <div>
        <section>
            <h1>{{ $t('our_goals.title') }}</h1>
            <p>{{ $t('our_goals.introduction') }}</p>
        </section>

        <section>
            <h2>{{ $t('our_goals.vision.title') }}</h2>
            <p>{{ $t('our_goals.vision.body') }}</p>
        </section>

        <section>
            <h2>{{ $t('our_goals.blocker.title') }}</h2>
            <p>{{ $t('our_goals.blocker.body') }}</p>
        </section>

        <section>
            <h2>{{ $t('our_goals.solution.title') }}</h2>
            <p>{{ $t('our_goals.solution.body') }}</p>
        </section>

        <section>
            <h2>{{ $t('our_goals.foundation.title') }}</h2>
            <p>{{ $t('our_goals.foundation.body') }}</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'OurGoalsPage'
};
</script>

<style scoped>
/* Add your styles here */
</style>
