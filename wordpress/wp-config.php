<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'chickenfries');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hw^h!#*O!VpeX9c1DsPA+hU44jSh?(?CEC`Ts]KovB%1lF9X#CIWGj?lAY]ln:El');
define('SECURE_AUTH_KEY',  'HQ?f k^k #yz0rz%%OFhB4;EH{Q&44xZhy/(hO@(1*caw6D4&|ROj2H=0zvF0D6+');
define('LOGGED_IN_KEY',    'E6n}?/O m>QrWUw@:*~03V#>Y6g1SYM$9Z^=c!g&3~I6-@W-q:,|h`J=Pf 3Pk0z');
define('NONCE_KEY',        '<*rCV8<0,*;r `Pd8r3_>vg[lp=#IsT#_$z*P7u2XoG$::(X#zZbf&Dl)9.((Do~');
define('AUTH_SALT',        '=szB5zL}HO?YhUU/>{E 1/3#c+[b=?F1*r4 dZ,xi:WP{;P=5g+TK+X5<Um`c(=?');
define('SECURE_AUTH_SALT', ':ed<Q6Nc(|{topw76c(<5]f:xx3%E&HVMJ-;[1&DM/9VGq/2KRTl5bQ^$q|Pob*&');
define('LOGGED_IN_SALT',   'E.(HqoY*`A5Kvjb4H|nh.YhY+-X!#stao$M`npOcXD~Q&%DAKld;baegvhHGPhjN');
define('NONCE_SALT',       '{.2HKh-x(WqsNGIx4(u))8^bx6{5S{$kYslf.t4!sXtHVZE#fArOu=;c c+hPdNm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
