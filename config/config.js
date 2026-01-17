/**
 * OpenSource 2025 AeroX
 * Code by itsfizys
 * AeroX Development
 * 
 * ZenoX Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite ZenoX"
  botInviteUrl: "https://discord.com/oauth2/authorize?client_id=1462047381100036126&permissions=8&integration_type=0&scope=bot",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/uX7uyCpeer",
  
  // Bot name (for display)
  botName: "ZenoX",
  
  // Bot description
  botDescription: "ZenoX - Fun, moderation, and Antinuke for your Discord server."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
