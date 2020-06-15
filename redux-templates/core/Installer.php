<?php // phpcs:ignore WordPress.Files.FileName

/**
 * Installer class which installs and/or activates block plugins.
 *
 * @since 4.0.0
 * @package Redux Framework
 */

namespace ReduxTemplates;

use ReduxTemplates;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/misc.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

/**
 * ReduxTemplates Installer.
 *
 * @since 4.0.0
 */
class Installer {

	/**
	 * Run command.
	 *
	 * @param string $slug Plugin Slug.
	 *
	 * @return array
	 * @since 4.0.0
	 */
	public static function run( $slug ) {
		$plugin_dir = WP_PLUGIN_DIR . '/' . $slug;

		/*
		 * Don't try installing plugins that already exist (wastes time downloading files that
		 * won't be used
		 */

		$status = array();
		if ( ! is_dir( $plugin_dir ) ) {

			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $slug,
					'fields' => array(
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					),
				)
			);

			ob_start();

			$skin     = new ReduxTemplates\InstallerMuter( array( 'api' => $api ) );
			$upgrader = new \Plugin_Upgrader( $skin );
			$install  = $upgrader->install( $api->download_link );

			ob_end_clean();

			if ( true !== $install ) {
				$status['error'] = 'Install process failed for ' . $slug . '.';

				if ( ! empty( $install ) ) {
					ob_start();
					// phpcs:ignore WordPress.PHP.DevelopmentFunctions
					\var_dump( $install );
					$result = ob_get_clean();

					$status['var_dump'] = $result;
				} else {
					$status['error'] .= ' ' . $upgrader->skin->options['api']->errors['plugins_api_failed'][0];
				}

				return $status;
			}
			$status['install'] = 'success';
		}

		/*
		 * The install results don't indicate what the main plugin file is, so we just try to
		 * activate based on the slug. It may fail, in which case the plugin will have to be activated
		 * manually from the admin screen.
		 */
		$plugin_path  = false;
		$plugin_check = false;
		if ( file_exists( $plugin_dir . '/' . $slug . '.php' ) ) {
			$plugin_path  = $plugin_dir . '/' . $slug . '.php';
			$plugin_check = $slug . '/' . $slug . '.php';
		} elseif ( file_exists( $plugin_dir . '/plugin.php' ) ) {
			$plugin_path  = $plugin_dir . '/' . $slug . '.php';
			$plugin_check = $slug . '/plugin.php';
		} else {
			$split        = explode( '-', $slug );
			$new_filename = '';
			foreach ( $split as $s ) {
				if ( ! empty( $s ) ) {
					$new_filename .= $s[0];
				}
			}
			$plugin_path  = $plugin_dir . '/' . $new_filename . '.php';
			$plugin_check = $slug . '/' . $new_filename . '.php';
		}

		if ( ! empty( $plugin_path ) ) {
			if ( is_plugin_active( $plugin_check ) && ! isset( $status['install'] ) ) {
				$status['activate'] = 'active';
			} else {
				activate_plugin( $plugin_check );
				$status['activate'] = 'success';
			}
		} else {
			$status['error'] = 'Error: Plugin file not activated (' . $slug . '). The plugin file could not be found.';
		}

		return $status;

	}
}
