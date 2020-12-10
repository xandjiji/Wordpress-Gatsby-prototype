<?php
	
function wp_setup() {

	add_theme_support( 'menus' );
	add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo' );
	add_theme_support('post-thumbnails');
    
    register_nav_menu( 'header-primary', 'Header Menu' );
    register_nav_menu( 'footer-primary', 'Footer Menu' );
}

add_action( 'after_setup_theme', 'wp_setup' );

function wpdocs_excerpt_more($more)
{
    return '...';
}

add_filter('excerpt_more', 'wpdocs_excerpt_more');

/* 
function vdm_register_options_page() {

	if (function_exists('acf_add_options_page')) {

        acf_add_options_page(array(
			'page_title' 	=> 'Configurações do Blog',
			'menu_title'	=> 'Configurações do Blog',
			'menu_slug' 	=> 'blog-settings',
			'icon_url'		=> 'dashicons-admin-settings'
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções de Tracking',
            'menu_title'    => 'Tracking',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções do Header',
            'menu_title'    => 'Header',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções da Home',
            'menu_title'    => 'Home',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções de Redes Sociais',
            'menu_title'    => 'Redes Sociais',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções da Sobre',
            'menu_title'    => 'Sobre',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções da Newsletter',
            'menu_title'    => 'Newsletter',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções da Search',
            'menu_title'    => 'Search',
            'parent_slug'   => 'blog-settings',
        ));

        acf_add_options_sub_page(array(
            'page_title'    => 'Opções do Footer',
            'menu_title'    => 'Footer',
            'parent_slug'   => 'blog-settings',
        ));
	}

}

add_action( 'after_setup_theme', 'vdm_register_options_page' );
 */