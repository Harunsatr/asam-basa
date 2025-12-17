#!/usr/bin/env bash
# 🚀 QUICK DEPLOYMENT SCRIPT
# Jalankan script ini untuk cepat deploy ke Netlify

set -e

echo "🎉 Asam & Basa Learning Platform - Deployment Helper"
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Install Dependencies
echo -e "${BLUE}Step 1: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}\n"

# Step 2: Type Check
echo -e "${BLUE}Step 2: Type checking...${NC}"
npm run type-check
echo -e "${GREEN}✅ Type check passed${NC}\n"

# Step 3: Build
echo -e "${BLUE}Step 3: Building for production...${NC}"
npm run build
echo -e "${GREEN}✅ Build successful${NC}\n"

# Step 4: Git Setup (if not already)
if [ ! -d .git ]; then
    echo -e "${BLUE}Step 4: Initializing Git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit: Production ready for Netlify"
    echo -e "${GREEN}✅ Git repository initialized${NC}\n"
else
    echo -e "${BLUE}Step 4: Git repository already initialized${NC}\n"
fi

# Step 5: Instructions
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo ""
echo "1. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/basaabaru.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "2. Deploy to Netlify:"
echo "   - Go to https://app.netlify.com"
echo "   - Connect your GitHub repository"
echo "   - Set GEMINI_API_KEY environment variable"
echo "   - Click Deploy!"
echo ""
echo "3. Test locally before deployment:"
echo "   npm run dev"
echo "   # Visit http://localhost:3000"
echo ""
echo -e "${GREEN}🎉 Ready for deployment!${NC}"
