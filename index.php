<?php get_header(); ?>

<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
	<!-- post -->
<?php endwhile; ?>
	<!-- post navigation -->
<?php else: ?>
	<!-- post navigation -->
<?php endif; ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>


