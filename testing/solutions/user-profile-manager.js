// User Profile Manager - Complete Solution

// Initialize a new user profile with default values
let userProfile = {
    username: "defaultUser",
    email: "user@example.com",
    age: 18,
    isActive: true,
    roles: ["user"]
};

// Update a user's email
function updateEmail(profile, newEmail) {
    profile.email = newEmail;
    console.log(`Email updated to: ${newEmail}`);
}

// Toggle a user's isActive status
function toggleActive(profile) {
    profile.isActive = !profile.isActive;
    console.log(`Active status toggled to: ${profile.isActive}`);
}

// Add a new role to the roles array (ensure no duplicates)
function addRole(profile, role) {
    if (!profile.roles.includes(role)) {
        profile.roles.push(role);
        console.log(`Role "${role}" added successfully`);
    } else {
        console.log(`Role "${role}" already exists`);
    }
}

// Remove a specific role from the roles array
function removeRole(profile, role) {
    const initialLength = profile.roles.length;
    profile.roles = profile.roles.filter(r => r !== role);
    
    if (profile.roles.length < initialLength) {
        console.log(`Role "${role}" removed successfully`);
    } else {
        console.log(`Role "${role}" not found`);
    }
}

// Check if a user has a specific role
function hasRole(profile, role) {
    return profile.roles.includes(role);
}

// Display the full user profile details
function displayProfile(profile) {
    console.log("\n=== User Profile Details ===");
    console.log(`Username: ${profile.username}`);
    console.log(`Email: ${profile.email}`);
    console.log(`Age: ${profile.age}`);
    console.log(`Active: ${profile.isActive}`);
    console.log(`Roles: ${profile.roles.join(", ")}`);
    console.log("===========================\n");
}

// Example usage and testing
console.log("=== User Profile Manager Demo ===\n");

// Display initial profile
console.log("Initial profile:");
displayProfile(userProfile);

// Test all functions
updateEmail(userProfile, "newmail@example.com");
toggleActive(userProfile);
addRole(userProfile, "admin");
addRole(userProfile, "moderator");
addRole(userProfile, "admin"); // This should show "already exists"

console.log(`Has admin role: ${hasRole(userProfile, "admin")}`);
console.log(`Has editor role: ${hasRole(userProfile, "editor")}`);

removeRole(userProfile, "user");
removeRole(userProfile, "nonexistent"); // This should show "not found"

// Display final profile
console.log("Final profile after all operations:");
displayProfile(userProfile);

// Additional utility functions

// Create a new user profile with custom values
function createUserProfile(username, email, age = 18, isActive = true, roles = ["user"]) {
    return {
        username,
        email,
        age,
        isActive,
        roles: [...roles] // Create a copy to avoid reference issues
    };
}

// Update multiple properties at once
function updateProfile(profile, updates) {
    Object.assign(profile, updates);
    console.log("Profile updated with multiple properties");
}

// Get user summary
function getUserSummary(profile) {
    return {
        username: profile.username,
        isActive: profile.isActive,
        roleCount: profile.roles.length,
        hasAdminRole: hasRole(profile, "admin")
    };
}

// Example of creating a new user and using additional functions
console.log("=== Creating New User ===");
const newUser = createUserProfile("john_doe", "john@example.com", 25, true, ["user", "premium"]);
displayProfile(newUser);

updateProfile(newUser, { age: 26, username: "john_doe_updated" });
console.log("User summary:", getUserSummary(newUser)); 