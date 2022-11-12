-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2022 at 01:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `talabat_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `image`, `location`, `description`, `category_type`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Bakery Khan', 'assets/images/Categories/Bakeries/Bakery Khan/Bakery_Khan.webp', 'Cairo', 'Bakery', 'Bakeries', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'The Bakery Corner', 'assets/images/Categories/Bakeries/The Bakery Corner/The_Bakery_Corner.jpg', 'Alexandria', 'Bakery', 'Bakeries', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Yatta Bakery', 'assets/images/Categories/Bakeries/Yatta Bakery/YattaBakery.jpg', 'Cairo', 'Bakery', 'Bakeries', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Zack\'s Bakery', 'assets/images/Categories/Bakeries/Zack\'s Bakery/Zacks_Bakery.webp', 'Alexandria', 'Bakery', 'Bakeries', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Abou Hamza', 'assets/images/Categories/Restaurants/Abou Hamza/Abou Hamza.webp', 'Cairo', 'Restuarant', 'Restaurants', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'CityCrepe', 'assets/images/Categories/Restaurants/CityCrepe/City_Crepe.webp', 'Cairo', 'Restaurant', 'Restaurants', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Groovy', 'assets/images/Categories/Restaurants/Groovy/Groovy.png', 'Mansoura', 'Restaurant', 'Restaurants', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Tom and Basal', 'assets/images/Categories/Restaurants/Tom and Basal/Tom and Basal.webp', 'Cairo', 'Restaurant', 'Restaurants', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Carrefour', 'assets/images/Categories/Markets/Carrefour/Carrefour.jpg', 'Cairo', 'Market', 'Markets', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Geant', 'assets/images/Categories/Markets/Geant/Geant.jpg', 'Cairo', 'Market', 'Markets', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Panda', 'assets/images/Categories/Markets/Panda/Panda.jpg', 'Cairo', 'Market', 'Markets', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Seoudi', 'assets/images/Categories/Markets/Seoudi/Seoudi.jpg', 'Cairo', 'Market', 'Markets', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_categories`
--

CREATE TABLE `menu_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_10_051006_create_categories_table', 1),
(6, '2022_11_10_051030_create_menu_categories_table', 1),
(7, '2022_11_10_051054_create_orders_table', 1),
(8, '2022_11_10_051112_create_products_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `details`, `total_price`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(3, 'Halloumi Cheese Mana\'esh', '19.00', 'Accepted', 2, '2022-11-11 22:06:09', '2022-11-11 22:06:09'),
(4, 'El Helw Offer', '130.00', 'Rejected', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `details`, `price`, `type`, `category_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Halloumi Cheese Mana\'esh', NULL, '19.00', 'most selling', 1, 'assets/images/Categories/Bakeries/Bakery Khan/1.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Plain Croissant', NULL, '23.00', 'most selling', 1, 'assets/images/Categories/Bakeries/Bakery Khan/2.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Classic Lotus Donut', '', '41.00', 'most selling', 1, 'assets/images/Categories/Bakeries/Bakery Khan/3.jpg', NULL, NULL),
(4, 'Akawi Cheese Mana\'esh', NULL, '19.00', 'most selling', 1, 'assets/images/Categories/Bakeries/Bakery Khan/4.jpg', NULL, NULL),
(5, 'Sausage Mana\'esh', NULL, '19.00', 'most selling', 1, 'assets/images/Categories/Bakeries/Bakery Khan/5.jpg\r\n', NULL, NULL),
(6, 'Lotus Cinnabon', NULL, '57.00', 'most selling', 1, 'assets/images/Categories/Bakeries/Bakery Khan/6.jpg\r\n', NULL, NULL),
(7, 'El Helw Offer', 'Large size Oriental Sausage Pie and chocolate pie.', '130.00', 'most selling', 5, 'assets/images/Categories/Restaurants/Abou Hamza/El_Helw_offer.webp', NULL, NULL),
(8, 'El Kofta Offer', '1/2 Kilo grilled kofta, rice, sesame paste and bread.', '90.00', 'most selling', 5, 'assets/images/Categories/Restaurants/Abou Hamza/عرض_الكفتة.webp', NULL, NULL),
(9, 'Grilled Kofta', '1/4 Kilo', '80.00', 'most selling', 5, 'assets/images/Categories/Restaurants/Abou Hamza/Grilled_Kofta.webp', NULL, NULL),
(10, 'Italian BBQ Chicken Hawawshi', NULL, '65.00', 'most selling', 5, 'assets/images/Categories/Restaurants/Abou Hamza/Italian_BBQ_Chicken_Hawawshi.webp', NULL, NULL),
(11, 'Crispy Chicken Pie', NULL, '80.00', 'most selling', 5, 'assets/images/Categories/Restaurants/Abou Hamza/Chicken-Pot-Pie.jpg', NULL, NULL),
(12, 'Dinner Box', '3 Crispy chicken strips pieces with French fries, rice, bread and Groovy sauce.', '49.99', 'most selling', 7, 'assets/images/Categories/Restaurants/Groovy/Dinner_Box.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default_user.png',
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `gender`, `image`, `is_admin`, `created_at`, `updated_at`) VALUES
(1, 'Tarek', 'Khalifa', 'admin@iti.com', '123456', 'Male', 'default_user.png', 1, '2022-11-11 11:22:39', '2022-11-11 11:22:39'),
(2, 'noha', 'mohamed', 'nohamohamedsabry5506@gmail.com', 'Password@123', 'female', 'assets/images/users/default_user.png', 0, '2022-11-11 11:40:00', '2022-11-11 11:40:00'),
(4, 'omar', 'hossam', 'm.omar.hossam@gmail.com', 'Password@123', 'male', 'assets/images/users/default_user.png', 0, '2022-11-11 21:01:42', '2022-11-11 21:01:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `menu_categories`
--
ALTER TABLE `menu_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_categories_category_id_foreign` (`category_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu_categories`
--
ALTER TABLE `menu_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu_categories`
--
ALTER TABLE `menu_categories`
  ADD CONSTRAINT `menu_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
