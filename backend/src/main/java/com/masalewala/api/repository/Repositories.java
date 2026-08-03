package com.masalewala.api.repository;
import com.masalewala.api.model.Models.*;import org.springframework.data.jpa.repository.JpaRepository;import java.util.*;
public interface Repositories{
interface Users extends JpaRepository<User,Long>{Optional<User> findByEmail(String email);}
interface Categories extends JpaRepository<Category,Long>{Optional<Category> findBySlug(String slug);}
interface Products extends JpaRepository<Product,Long>{List<Product> findByNameContainingIgnoreCase(String q);}
interface Addresses extends JpaRepository<Address,Long>{}
interface Orders extends JpaRepository<Order,Long>{List<Order> findByUserEmail(String email);Optional<Order> findByTrackingNumber(String trackingNumber);}
interface Payments extends JpaRepository<Payment,Long>{Optional<Payment> findByOrderId(Long orderId);}
interface Reviews extends JpaRepository<Review,Long>{}
interface Wishlists extends JpaRepository<Wishlist,Long>{}
interface Inventories extends JpaRepository<Inventory,Long>{}
interface Coupons extends JpaRepository<Coupon,Long>{Optional<Coupon> findByCode(String code);}
interface Branches extends JpaRepository<Branch,Long>{}
interface Faqs extends JpaRepository<Faq,Long>{}
interface Testimonials extends JpaRepository<Testimonial,Long>{}
interface Videos extends JpaRepository<Video,Long>{}
interface Notifications extends JpaRepository<Notification,Long>{}
interface AuditLogs extends JpaRepository<AuditLog,Long>{}}
